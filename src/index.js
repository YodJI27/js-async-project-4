import axios from 'axios';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import debug from 'debug';
import Listr from 'listr';

// Настройка логирования
const log = debug('page-loader');
const axiosLog = debug('axios');

// Включение логирования для axios
axios.interceptors.request.use((config) => {
  axiosLog('Request:', config.method, config.url);
  return config;
});

axios.interceptors.response.use((response) => {
  axiosLog('Response:', response.status, response.config.url);
  return response;
}, (error) => {
  axiosLog('Error:', error.message, error.config?.url);
  return Promise.reject(error);
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isLocalResource = (resourceUrl, pageUrl) => {
  try {
    const pageDomain = new URL(pageUrl).hostname;
    const resourceDomain = new URL(resourceUrl, pageUrl).hostname;
    return resourceDomain === pageDomain || 
           resourceDomain.endsWith('.' + pageDomain);
  } catch {
    return false;
  }
};

const generateFilename = (url, extension = 'html') => {
  const urlWithoutProtocol = url.replace(/^https?:\/\//, '');
  const urlWithoutExt = urlWithoutProtocol.replace(/\.\w+$/, '');
  const filename = urlWithoutExt.replace(/[^a-zA-Z0-9]/g, '-') + `.${extension}`;
  log(`Generated filename: ${filename} for URL: ${url}`);
  return filename;
};

const getExtensionFromUrl = (url) => {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    
    if (pathname.endsWith('/')) return 'html';
    
    const lastDotIndex = pathname.lastIndexOf('.');
    const lastSlashIndex = pathname.lastIndexOf('/');

    if (lastDotIndex === -1 || lastDotIndex < lastSlashIndex) {
      return pathname.endsWith('/courses') ? 'html' : 'bin';
    }
    
    return pathname.slice(lastDotIndex + 1).toLowerCase();
  } catch {
    return 'bin';
  }
};

const processHtml = async (html, pageUrl, outputDir) => {
  log(`Processing HTML for URL: ${pageUrl}`);
  const $ = cheerio.load(html);
  const resourcesDirName = generateFilename(pageUrl).replace('.html', '_files');
  const resourcesDir = path.join(outputDir, resourcesDirName);
  
  try {
    await fs.access(outputDir, fs.constants.W_OK);
    log(`Creating resources directory: ${resourcesDir}`);
    await fs.mkdir(resourcesDir, { recursive: true });
  } catch (error) {
    throw new Error(`No access to directory ${outputDir}: ${error.message}`);
  }

  const resourceTags = [
    { selector: 'img', attr: 'src' },
    { selector: 'link', attr: 'href' },
    { selector: 'script', attr: 'src' }
  ];

  const resources = resourceTags.flatMap(({ selector, attr }) => {
    return $(selector).map((i, el) => {
      const resourceUrl = $(el).attr(attr);
      if (!resourceUrl) return null;

      try {
        const absoluteUrl = new URL(resourceUrl, pageUrl).toString();
        if (!isLocalResource(absoluteUrl, pageUrl)) {
          log(`Skipping external resource: ${absoluteUrl}`);
          return null;
        }

        const extension = $(el).attr('rel') === 'canonical' 
          ? 'html' 
          : getExtensionFromUrl(absoluteUrl);
        const filename = generateFilename(absoluteUrl, extension);
        const resourcePath = path.join(resourcesDir, filename);

        return {
          url: absoluteUrl,
          path: resourcePath,
          filename,
          element: $(el),
          attr,
          resourcesDirName
        };
      } catch (error) {
        log(`Failed to process resource ${resourceUrl}: ${error.message}`);
        return null;
      }
    }).get().filter(Boolean);
  });

  const tasks = new Listr(resources.map(resource => ({
    title: `Downloading ${resource.url}`,
    task: async () => {
      try {
        const response = await axios.get(resource.url, {
          responseType: 'arraybuffer',
          validateStatus: (status) => status === 200
        });
        await fs.writeFile(resource.path, response.data);
        resource.element.attr(resource.attr, path.join(resource.resourcesDirName, resource.filename));
      } catch (error) {
        log(`Failed to download resource ${resource.url}: ${error.message}`);
        resource.element.removeAttr(resource.attr);
      }
    }
  })), { concurrent: true, exitOnError: false });

  await tasks.run();
  
  return $.html();
};

const downloadPage = async (url, outputDir = process.cwd()) => {
  try {
    // Проверка доступности директории
    try {
      await fs.access(outputDir, fs.constants.W_OK);
    } catch (err) {
      throw new Error(`No write access to directory: ${outputDir}`);
    }

    const response = await axios.get(url, {
      responseType: 'text',
      validateStatus: (status) => status === 200
    });

    const filename = generateFilename(url);
    const filepath = path.join(outputDir, filename);
    
    const processedHtml = await processHtml(response.data, url, outputDir);
    await fs.writeFile(filepath, processedHtml);
    
    return filepath;
  } catch (error) {
    if (error.response) {
      throw new Error(`HTTP Error ${error.response.status} for ${url}`);
    } else if (error.code === 'ENOENT') {
      throw new Error(`Directory does not exist: ${error.path}`);
    } else if (error.code === 'EACCES') {
      throw new Error(`Permission denied for directory ${outputDir}`);
    }
    throw new Error(`Failed to download ${url}: ${error.message}`);
  }
};

export default downloadPage;
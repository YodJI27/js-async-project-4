// src/page-loader.js
import axios from 'axios';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import debug from 'debug';

// Настройка логирования
const log = debug('page-loader');
const axiosLog = debug('axios');
const nockLog = debug('nock');

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

  const downloadPromises = resourceTags.flatMap(({ selector, attr, forceHtml = false }) => {
    return $(selector).map(async (i, el) => {
      const resourceUrl = $(el).attr(attr);
      if (!resourceUrl) return;

      try {
        const absoluteUrl = new URL(resourceUrl, pageUrl).toString();
        if (!isLocalResource(absoluteUrl, pageUrl)) {
          log(`Skipping external resource: ${absoluteUrl}`);
          return;
        }

        const extension = $(el).attr('rel') === 'canonical' 
          ? 'html' 
          : getExtensionFromUrl(absoluteUrl);
        const filename = generateFilename(absoluteUrl, extension);
        const resourcePath = path.join(resourcesDir, filename);

        try {
          log(`Downloading resource: ${absoluteUrl}`);
          const response = await axios.get(absoluteUrl, { 
            responseType: 'arraybuffer',
            validateStatus: (status) => status === 200
          });
          await fs.writeFile(resourcePath, response.data);
          log(`Resource saved: ${resourcePath}`);
          console.log(`Downloaded: ${filename}`);
          $(el).attr(attr, path.join(resourcesDirName, filename));
        } catch (error) {
          if (error.response) {
            throw new Error(`Failed to download ${absoluteUrl}: HTTP ${error.response.status}`);
          } else {
            throw new Error(`Failed to download ${absoluteUrl}: ${error.message}`);
          }
        }
      } catch (error) {
        throw new Error(`Failed to process resource ${resourceUrl}: ${error.message}`);
      }
    }).get();
  });

  try {
    await Promise.all(downloadPromises);
  } catch (error) {
    if (error.response) {
      throw new Error(`Failed to download resource: HTTP ${error.response.status}`);
    }
    throw error;
  }
  
  return $.html();
};

const downloadPage = async (url, outputDir = process.cwd()) => {
  log(`Starting download for URL: ${url} to directory: ${outputDir}`);
  const normalizedOutputDir = path.normalize(outputDir);
  
  try {
    const response = await axios.get(url, {
      validateStatus: (status) => status === 200
    });
    
    const filename = generateFilename(url);
    const filepath = path.join(normalizedOutputDir, filename);
    
    try {
    await fs.access(normalizedOutputDir, fs.constants.W_OK);
    const processedHtml = await processHtml(response.data, url, normalizedOutputDir);
    await fs.writeFile(filepath, processedHtml);
    return filepath;
  } catch (error) {
    if (error.code === 'EACCES' || error.code === 'ENOENT') {
      throw new Error(`Failed to download ${url}: No access to directory`);
    }
    throw new Error(`Failed to download ${url}: ${error.message}`);
  }
  } catch (error) {
    if (error.response) {
      throw new Error(`Failed to download ${url}: HTTP ${error.response.status}`);
    } else {
      throw new Error(`Failed to download ${url}: ${error.message}`);
    }
  }
};

export default downloadPage;
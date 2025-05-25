// src/page-loader.js
import axios from 'axios';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isLocalResource = (resourceUrl, pageUrl) => {
    try {
      const pageDomain = new URL(pageUrl).hostname;
      const resourceDomain = new URL(resourceUrl, pageUrl).hostname;
      // Учитываем поддомены одного домена
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
  return filename;
};

// const downloadResource = async (url, outputDir) => {
//   try {
//     const response = await axios.get(url, { responseType: 'arraybuffer' });
//     const resourceFilename = generateFilename(url, getExtensionFromUrl(url));
//     const resourcePath = path.join(outputDir, resourceFilename);
//     await fs.writeFile(resourcePath, response.data);
//     console.log(`Downloaded: ${resourcePath}`);
//     return resourceFilename;
//   } catch (error) {
//     throw new Error(`Failed to download resource ${url}: ${error.message}`);
//   }
// };

const getExtensionFromUrl = (url) => {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      
      // Если URL заканчивается на /, считаем это HTML
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
    const $ = cheerio.load(html);
    const resourcesDirName = generateFilename(pageUrl).replace('.html', '_files');
    const resourcesDir = path.join(outputDir, resourcesDirName);
    await fs.mkdir(resourcesDir, { recursive: true });
  
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
          if (!isLocalResource(absoluteUrl, pageUrl)) return;
  
          const extension = $(el).attr('rel') === 'canonical' 
          ? 'html' 
          : getExtensionFromUrl(absoluteUrl);
          const filename = generateFilename(absoluteUrl, extension);
          const resourcePath = path.join(resourcesDir, filename);
  
          try {
            const response = await axios.get(absoluteUrl, { 
              responseType: 'arraybuffer'
            });
            await fs.writeFile(resourcePath, response.data);
            console.log(`Downloaded: ${filename}`);
            $(el).attr(attr, path.join(resourcesDirName, filename));
          } catch (error) {
            if (error.response?.status === 404) {
              console.warn(`Resource not found: ${absoluteUrl}`);
            } else {
              console.error(`Error downloading ${absoluteUrl}: ${error.message}`);
            }
          }
        } catch (error) {
          console.error(`Failed to process resource ${resourceUrl}: ${error.message}`);
        }
      }).get();
    });
  
    await Promise.all(downloadPromises);
    return $.html();
  };

const downloadPage = async (url, outputDir = process.cwd()) => {
  const normalizedOutputDir = path.normalize(outputDir);
  
  try {
    const response = await axios.get(url);
    const filename = generateFilename(url);
    const filepath = path.join(normalizedOutputDir, filename);
    
    await fs.mkdir(normalizedOutputDir, { recursive: true });
    
    const processedHtml = await processHtml(response.data, url, normalizedOutputDir);
    await fs.writeFile(filepath, processedHtml);
    
    console.log(`\nPage saved to: ${filepath}`);
    return filepath;
  } catch (error) {
    throw new Error(`Failed to download page ${url}: ${error.message}`);
  }
};

export default downloadPage;
// src/page-loader.js
import axios from 'axios';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const generateFilename = (url, extension = 'html') => {
    const urlWithoutProtocol = url.replace(/^https?:\/\//, '');
    // Удаляем расширение из URL, если оно уже есть
    const urlWithoutExt = urlWithoutProtocol.replace(/\.\w+$/, '');
    const filename = urlWithoutExt.replace(/[^a-zA-Z0-9]/g, '-') + `.${extension}`;
    return filename;
  };

const downloadResource = async (url, outputDir) => {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const resourceFilename = generateFilename(url, getExtensionFromUrl(url));
    const resourcePath = path.join(outputDir, resourceFilename);
    await fs.writeFile(resourcePath, response.data);
    console.log(`Downloaded image: ${resourcePath}`);
    return resourceFilename;
  } catch (error) {
    throw new Error(`Failed to download resource ${url}: ${error.message}`);
  }
};

const getExtensionFromUrl = (url) => {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const lastDotIndex = pathname.lastIndexOf('.');
    if (lastDotIndex === -1) return 'bin'; // Возвращаем 'bin', если расширения нет
    return pathname.slice(lastDotIndex + 1).toLowerCase();
  };

const processHtml = async (html, pageUrl, outputDir) => {
  const $ = cheerio.load(html);
  const resourcesDirName = generateFilename(pageUrl).replace('.html', '_files');
  const resourcesDir = path.join(outputDir, resourcesDirName);
  await fs.mkdir(resourcesDir, { recursive: true });

  console.log(`Created directory: ${resourcesDir}`); // Сообщение о создании директории

  const imgPromises = $('img').map(async (i, img) => {
    const src = $(img).attr('src');
    if (!src) return;

    try {
      const absoluteUrl = new URL(src, pageUrl).toString();
      const resourceFilename = await downloadResource(absoluteUrl, resourcesDir);
      $(img).attr('src', path.join(resourcesDirName, resourceFilename));
    } catch (error) {
      console.error(error.message);
    }
  }).get();

  await Promise.all(imgPromises);

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
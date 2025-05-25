import axios from 'axios';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const generateFilename = (url) => {
  const urlWithoutProtocol = url.replace(/^https?:\/\//, '');
  const filename = urlWithoutProtocol.replace(/[^a-zA-Z0-9]/g, '-') + '.html';
  return filename;
};

const downloadPage = (url, outputDir = process.cwd()) => {
  // Нормализация пути для Windows
  const normalizedOutputDir = path.normalize(outputDir);
  
  return axios.get(url)
    .then((response) => {
      const filename = generateFilename(url);
      const filepath = path.join(normalizedOutputDir, filename);
      
      return fs.mkdir(normalizedOutputDir, { recursive: true })
        .then(() => fs.writeFile(filepath, response.data))
        .then(() => {
          console.log(`File saved to: ${filepath}`);
          return filepath;
        });
    });
};

export default downloadPage;
// src/page-loader.test.js
import { describe, test, expect, beforeEach } from '@jest/globals';
import axios from 'axios';
import nock from 'nock';
import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';
import downloadPage from '../src/page-loader.js';

describe('page-loader', () => {
  let tempDir;
  const url = 'https://ru.hexlet.io/courses';
  const expectedFilename = 'ru-hexlet-io-courses.html';
  const expectedResourcesDir = 'ru-hexlet-io-courses_files';
  const pageContent = `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="utf-8">
        <title>Курсы по программированию Хекслет</title>
      </head>
      <body>
        <img src="/assets/professions/nodejs.png" alt="Иконка профессии Node.js-программист" />
        <h3>
          <a href="/professions/nodejs">Node.js-программист</a>
        </h3>
      </body>
    </html>
  `;
  const mockImage = Buffer.from('mock image data');

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
    nock('https://ru.hexlet.io')
      .get('/courses')
      .reply(200, pageContent)
      .get('/assets/professions/nodejs.png')
      .reply(200, mockImage);
  });

  test('should generate correct filename', async () => {
    const filename = await downloadPage(url, tempDir);
    expect(filename).toBe(path.join(tempDir, expectedFilename));
  });

  test('should save page content correctly', async () => {
    const filepath = await downloadPage(url, tempDir);
    const content = await fs.readFile(filepath, 'utf-8');
    expect(content).toContain('Курсы по программированию Хекслет');
  });

  test('should download images and update HTML', async () => {
    await downloadPage(url, tempDir);
    
    const resourcesDir = path.join(tempDir, expectedResourcesDir);
    const files = await fs.readdir(resourcesDir);
    expect(files.length).toBe(1);
    expect(files[0]).toBe('ru-hexlet-io-assets-professions-nodejs.png');
    
    const htmlContent = await fs.readFile(path.join(tempDir, expectedFilename), 'utf-8');
    expect(htmlContent).toContain(expectedResourcesDir);
    expect(htmlContent).toContain(files[0]);
  });
});
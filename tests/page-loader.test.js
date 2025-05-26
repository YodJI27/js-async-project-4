// page-loader.test.js
import { describe, test, expect, beforeEach, afterEach } from '@jest/globals';
import axios from 'axios';
import nock from 'nock';
import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';
import debug from 'debug';
import downloadPage from '../src/page-loader.js';

// Включаем логирование для тестов
debug.enable('page-loader,axios,nock');
const log = debug('page-loader:test');

describe('page-loader', () => {
  let tempDir;
  const baseUrl = 'https://ru.hexlet.io';
  const url = `${baseUrl}/courses`;
  const expectedFilename = 'ru-hexlet-io-courses.html';
  const expectedResourcesDir = 'ru-hexlet-io-courses_files';

  // Фикстура из задания
  const pageContent = `<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="utf-8">
        <title>Курсы по программированию Хекслет</title>
        <link rel="stylesheet" media="all" href="https://cdn2.hexlet.io/assets/menu.css">
        <link rel="stylesheet" media="all" href="/assets/application.css" />
        <link href="/courses" rel="canonical">
      </head>
      <body>
        <img src="/assets/professions/nodejs.png" alt="Иконка профессии Node.js-программист" />
        <h3>
          <a href="/professions/nodejs">Node.js-программист</a>
        </h3>
        <script src="https://js.stripe.com/v3/"></script>
        <script src="https://ru.hexlet.io/packs/js/runtime.js"></script>
      </body>
    </html>`;

  beforeEach(async () => {
    log('Creating temp directory');
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
    
    log('Setting up nock mocks');
    nock(baseUrl)
      .get('/courses')
      .reply(200, pageContent)
      .get('/assets/application.css')
      .reply(200, 'css-content', { 'Content-Type': 'text/css' })
      .get('/assets/professions/nodejs.png')
      .reply(200, 'image-content', { 'Content-Type': 'image/png' })
      .get('/courses')
      .reply(200, 'canonical-content')
      .get('/packs/js/runtime.js')
      .reply(200, 'js-content', { 'Content-Type': 'application/javascript' });
  });

  afterEach(() => {
    log('Cleaning nock mocks');
    nock.cleanAll();
  });

  test('should generate correct filename', async () => {
    log('Running filename generation test');
    const filepath = await downloadPage(url, tempDir);
    expect(filepath).toBe(path.join(tempDir, expectedFilename));
  });

  test('should download all local resources', async () => {
    await downloadPage(url, tempDir);
    const files = await fs.readdir(path.join(tempDir, expectedResourcesDir));
    
    expect(files.sort()).toEqual([
      'ru-hexlet-io-assets-application.css',
      'ru-hexlet-io-assets-professions-nodejs.png',
      'ru-hexlet-io-courses.html',
      'ru-hexlet-io-packs-js-runtime.js'
    ].sort());
  });

  test('should update HTML with local paths', async () => {
    await downloadPage(url, tempDir);
    const html = await fs.readFile(path.join(tempDir, expectedFilename), 'utf-8');
    const normalizedHtml = html.replace(/\\/g, '/');
    
    const expectedPaths = [
      `${expectedResourcesDir}/ru-hexlet-io-assets-application.css`,
      `${expectedResourcesDir}/ru-hexlet-io-assets-professions-nodejs.png`,
      `${expectedResourcesDir}/ru-hexlet-io-packs-js-runtime.js`,
      `${expectedResourcesDir}/ru-hexlet-io-courses.html`
    ];
  
    expectedPaths.forEach(path => {
      expect(normalizedHtml).toContain(path);
    });
    
    expect(html).toContain('https://cdn2.hexlet.io/assets/menu.css');
    expect(html).toContain('https://js.stripe.com/v3/');
  });

  test('should ignore external resources', async () => {
    await downloadPage(url, tempDir);
    const files = await fs.readdir(path.join(tempDir, expectedResourcesDir));
    
    expect(files).not.toContain('cdn2-hexlet-io-assets-menu.css');
    expect(files).not.toContain('js-stripe-com-v3.js');
  });

test('should handle resource download errors', async () => {
  nock.cleanAll();
  nock(baseUrl)
    .get('/courses')
    .reply(200, pageContent)
    .get('/assets/application.css')
    .reply(404);

  await expect(downloadPage(url, tempDir)).rejects.toThrow(/Failed to download/);
});

  test('should handle network errors', async () => {
    nock.cleanAll();
    nock(baseUrl)
      .get('/courses')
      .replyWithError('Network error');

    await expect(downloadPage(url, tempDir)).rejects.toThrow(/Network error/);
  });

  test('should handle non-200 status codes', async () => {
    nock.cleanAll();
    nock(baseUrl)
      .get('/courses')
      .reply(500);

    await expect(downloadPage(url, tempDir)).rejects.toThrow(/HTTP 500/);
  });

  test('should handle file system errors', async () => {
    // Создаем директорию без прав на запись
    const readOnlyDir = path.join(tempDir, 'readonly');
    await fs.mkdir(readOnlyDir, { recursive: true });
    
    // На Windows простое изменение прав может не сработать, поэтому попробуем записать в несуществующую поддиректорию
    await expect(downloadPage(url, path.join(readOnlyDir, 'nonexistent'))).rejects.toThrow(/Failed to download/);
  });

  test('should handle invalid URLs', async () => {
    await expect(downloadPage('invalid-url', tempDir)).rejects.toThrow(/Failed to download/);
  });
});
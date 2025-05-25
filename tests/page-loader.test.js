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
  const pageContent = '<html><body>Test page</body></html>';

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
    nock('https://ru.hexlet.io')
      .get('/courses')
      .reply(200, pageContent);
  });

  test('should generate correct filename', async () => {
    const filename = await downloadPage(url, tempDir);
    expect(filename).toBe(path.join(tempDir, expectedFilename));
  });

  test('should save page content correctly', async () => {
    const filepath = await downloadPage(url, tempDir);
    const content = await fs.readFile(filepath, 'utf-8');
    expect(content).toBe(pageContent);
  });
});

import axios from 'axios'
import { promises as fs } from 'fs'
import path from 'path'
import * as cheerio from 'cheerio'
import debug from 'debug'
import Listr from 'listr'
import axiosDebug from 'axios-debug-log'

// Настройка логирования
const log = debug('page-loader')

// Включение логирования для axios только в debug режиме
axiosDebug({
  request(debug, config) {
    debug('Request:', config.method?.toUpperCase(), config.url)
  },
  response(debug, response) {
    debug(
      'Response:',
      response.status,
      response.statusText,
      `(${response.config.method?.toUpperCase()} ${response.config.url})`,
    )
  },
  error(debug, error) {
    if (!error.response) {
      debug('Error:', error.message, `(${error.config?.method?.toUpperCase()} ${error.config?.url})`)
      return
    }
    const { response } = error
    debug(
      'Error:',
      response.status,
      response.statusText,
      response.data?.message || '',
      `(${response.config.method?.toUpperCase()} ${response.config.url})`,
    )
  },
}, debug('axios'))

const isLocalResource = (resourceUrl, pageUrl) => {
  try {
    const pageDomain = new URL(pageUrl).hostname
    const resourceDomain = new URL(resourceUrl, pageUrl).hostname
    return resourceDomain === pageDomain
      || resourceDomain.endsWith('.' + pageDomain)
  }
  catch {
    return false
  }
}

const generateFilename = (url, extension = 'html') => {
  const urlWithoutProtocol = url.replace(/^https?:\/\//, '')
  const urlWithoutExt = urlWithoutProtocol.replace(/\.\w+$/, '')
  const filename = urlWithoutExt.replace(/[^a-zA-Z0-9]/g, '-') + `.${extension}`
  log(`Generated filename: ${filename} for URL: ${url}`)
  return filename
}

const getExtensionFromUrl = (url) => {
  try {
    const urlObj = new URL(url)
    const pathname = urlObj.pathname

    if (pathname.endsWith('/')) return 'html'

    const lastDotIndex = pathname.lastIndexOf('.')
    const lastSlashIndex = pathname.lastIndexOf('/')

    if (lastDotIndex === -1 || lastDotIndex < lastSlashIndex) {
      return pathname.endsWith('/courses') ? 'html' : 'bin'
    }

    return pathname.slice(lastDotIndex + 1).toLowerCase()
  }
  catch {
    return 'bin'
  }
}

const processHtml = (html, pageUrl, outputDir) => {
  log(`Processing HTML for URL: ${pageUrl}`)
  const $ = cheerio.load(html)
  const resourcesDirName = generateFilename(pageUrl).replace('.html', '_files')
  const resourcesDir = path.join(outputDir, resourcesDirName)

  return fs.access(outputDir, fs.constants.W_OK)
    .then(() => {
      log(`Creating resources directory: ${resourcesDir}`)
      return fs.mkdir(resourcesDir, { recursive: true })
    })
    .catch((error) => {
      throw new Error(`No access to directory ${outputDir}: ${error.message}`)
    })
    .then(() => {
      const resourceTags = [
        { selector: 'img', attr: 'src' },
        { selector: 'link', attr: 'href' },
        { selector: 'script', attr: 'src' },
      ]

      const resources = resourceTags.flatMap(({ selector, attr }) => {
        return $(selector)
          .toArray()
          .map(el => $(el))
          .filter($el => $el.attr(attr))
          .map(($el) => {
            const resourceUrl = $el.attr(attr)
            const absoluteUrl = new URL(resourceUrl, pageUrl).toString()

            const extension = $el.attr('rel') === 'canonical'
              ? 'html'
              : getExtensionFromUrl(absoluteUrl)
            const filename = generateFilename(absoluteUrl, extension)
            const resourcePath = path.join(resourcesDir, filename)

            return {
              url: absoluteUrl,
              path: resourcePath,
              filename,
              element: $el,
              attr,
              resourcesDirName,
            }
          })
          .filter(resource => {
            const isLocal = isLocalResource(resource.url, pageUrl)
            if (!isLocal) {
              log(`Skipping external resource: ${resource.url}`)
            }
            return isLocal
          })
      })

      const tasks = new Listr(resources.map(resource => ({
        title: `Downloading ${resource.url}`,
        task: () => {
          return axios.get(resource.url, {
            responseType: 'arraybuffer',
            validateStatus: status => status === 200,
          })
            .then((response) => {
              return fs.writeFile(resource.path, response.data)
                .then(() => {
                  resource.element.attr(resource.attr, path.join(resource.resourcesDirName, resource.filename))
                })
            })
            .catch((error) => {
              log(`Failed to download resource ${resource.url}: ${error.message}`)
              resource.element.removeAttr(resource.attr)
            })
        },
      })), { concurrent: true, exitOnError: false })

      return tasks.run()
        .then(() => $.html())
    })
}

const downloadPage = (url, outputDir = process.cwd()) => {
  // Проверка доступности директории
  return fs.access(outputDir, fs.constants.W_OK)
    .catch(() => {
      throw new Error(`No write access to directory: ${outputDir}`)
    })
    .then(() => {
      return axios.get(url, {
        responseType: 'text',
        validateStatus: status => status === 200,
      })
    })
    .then((response) => {
      const filename = generateFilename(url)
      const filepath = path.join(outputDir, filename)

      return processHtml(response.data, url, outputDir)
        .then((processedHtml) => {
          return fs.writeFile(filepath, processedHtml)
            .then(() => filepath)
        })
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(`HTTP Error ${error.response.status} for ${url}`)
      }
      else if (error.code === 'ENOENT') {
        throw new Error(`Directory does not exist: ${error.path}`)
      }
      else if (error.code === 'EACCES') {
        throw new Error(`Permission denied for directory ${outputDir}`)
      }
      throw new Error(`Failed to download ${url}: ${error.message}`)
    })
}

export default downloadPage

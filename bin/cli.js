#!/usr/bin/env node

import { Command } from 'commander'
import downloadPage from '../src/index.js'

const program = new Command()

program
  .name('page-loader')
  .description('Page loader utility')
  .version('1.0.0')
  .argument('<url>', 'url to download')
  .option('-o, --output [dir]', 'output dir', process.cwd())
  .action((url) => {
    const options = program.opts()
    downloadPage(url, options.output)
      .then((filepath) => {
        console.log(`Page successfully downloaded to: ${filepath}`)
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`)
        process.exit(1)
      })
  })

program.parse(process.argv)

#!/usr/bin/env node

import convertToTxt from './src/index.js';
import path from 'path';

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: file-converter <file-path> <file-type>');
  process.exit(1);
}

const [filePath, fileType] = args;

(async () => {
  try {
    const text = await convertToTxt(filePath, fileType);
    console.log(text);
  } catch (error) {
    console.error(`Error converting file: ${error.message}`);
  }
})();

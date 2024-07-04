import fs from 'fs';
import path from 'path';
import pkg from 'pdfjs-dist/legacy/build/pdf.js';
const { getDocument } = pkg;

const convert = async (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const dataBuffer = fs.readFileSync(filePath);
    const dataArray = new Uint8Array(dataBuffer);
    const pdfDocument = await getDocument({
      data: dataArray,
      standardFontDataUrl: path.resolve('node_modules/pdfjs-dist/standard_fonts') + '/'
    }).promise;

    let textContent = '';
    for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
      const page = await pdfDocument.getPage(pageNum);
      const textContentObj = await page.getTextContent();
      const strings = textContentObj.items.map(item => item.str);
      textContent += strings.join(' ') + '\n';
    }

    return textContent;
  } catch (error) {
    throw new Error(`Error parsing PDF file: ${error.message}`);
  }
};

export default { convert };

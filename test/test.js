import { expect } from 'chai';
import convertToTxt from '../src/index.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('File Converter', function() {
  it('should convert PDF to text', async function() {
    const filePath = path.resolve(__dirname, '../samples/sample.pdf');
    const text = await convertToTxt(filePath, 'pdf');
    console.log("PDF text :", text);
    expect(text).to.be.a('string');
  });

  it('should convert DOCX to text', async function() {
    const filePath = path.resolve(__dirname, '../samples/sample.docx');
    const text = await convertToTxt(filePath, 'docx');
    console.log("DOCX text :", text);
    expect(text).to.be.a('string');
  });

  it('should convert TXT to text', async function() {
    const filePath = path.resolve(__dirname, '../samples/sample.txt');
    const text = await convertToTxt(filePath, 'txt');
    console.log("TXT text :", text);
    expect(text).to.be.a('string');
  });

  it('should throw an error for unsupported file types', async function() {
    const filePath = path.resolve(__dirname, '../samples/sample.xlsx');
    try {
      await convertToTxt(filePath, 'xlsx');
    } catch (error) {
      expect(error.message).to.equal('Unsupported file type');
    }
  });

  it('should throw an error for non-existent files', async function() {
    const filePath = path.resolve(__dirname, '../samples/nonexistent.pdf');
    try {
      await convertToTxt(filePath, 'pdf');
    } catch (error) {
      expect(error.message).to.include('File not found');
    }
  });
});

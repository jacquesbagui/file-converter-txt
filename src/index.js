import pdfConverter from './pdfConverter.js';
import wordConverter from './wordConverter.js';
import textConverter from './textConverter.js';

const supportedFileTypes = ['pdf', 'docx', 'txt'];

const convertToTxt = async (filePath, fileType) => {
  try {
    if (!supportedFileTypes.includes(fileType.toLowerCase())) {
      throw new Error('Unsupported file type');
    }

    switch (fileType.toLowerCase()) {
      case 'pdf':
        return await pdfConverter.convert(filePath);
      case 'docx':
        return await wordConverter.convert(filePath);
      case 'txt':
        return await textConverter.convert(filePath);
      default:
        throw new Error('Unsupported file type');
    }
  } catch (error) {
    console.error(`Error converting file: ${error.message}`);
    throw error;
  }
};

export default convertToTxt;
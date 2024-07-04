import fs from 'fs';
import mammoth from 'mammoth';

const convert = async (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const data = await mammoth.extractRawText({ path: filePath });
    return data.value;
  } catch (error) {
    throw new Error(`Error parsing Word file: ${error.message}`);
  }
};

export default { convert };
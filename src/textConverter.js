import fs from 'fs';

const convert = async (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    throw new Error(`Error reading text file: ${error.message}`);
  }
};

export default { convert };
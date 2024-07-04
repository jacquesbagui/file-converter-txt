# File Converter txt

A robust Node.js library to convert PDF, Word, and text files to .txt format.

## Installation

```bash
npm install file-converter-txt
```

# Usage

### Basic Usage

You can use the library in your Node.js projects as follows:

```bash
import convertToTxt from 'file-converter-txt';

(async () => {
  try {
    const text = await convertToTxt('path/to/your/file.pdf', 'pdf');
    console.log(text);
  } catch (error) {
    console.error(error);
  }
})();
```

### CLI Usage

You can also use the library from the command line.

```bash
npx file-converter-txt path/to/your/file.pdf pdf
```

# Supported File Types

* PDF (.pdf)

* Word (.docx)

* Text (.txt)

# Error Handling

The library provides detailed error messages for unsupported file types and file reading errors.

### Example Error Handling

```bash
import convertToTxt from 'file-converter-txt';

(async () => {
  try {
    const text = await convertToTxt('path/to/your/file.pdf', 'pdf');
    console.log(text);
  } catch (error) {
    console.error(`Error converting file: ${error.message}`);
  }
})();

```

# Scripts

* `test`: Run tests using Mocha.

### Testing

We use Mocha and Chai for unit testing. To run the tests, use the following command:

```bash
npm test
```

### Sample Test File

Ensure you have sample files for testing in the samples directory.

# Contributing

We welcome contributions to improve this library. Please open an issue or submit a pull request on GitHub.

# License

This project is licensed under the MIT License.

# Author

* Jean Jacques Bagui


# Acknowledgements

- [pdfjs-dist](https://github.com/mozilla/pdfjs-dist) for PDF parsing
- [mammoth](https://github.com/mwilliamson/mammoth.js) for Word document parsing

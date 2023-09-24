const fs = require('fs');

// Define the source and destination file paths
const sourceFilePath = 'kaprekar_numbers.txt';
const destinationFilePath = 'destination.txt';

// Read the content from the source file
fs.readFile(sourceFilePath, 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading source file:', readErr);
    return;
  }

  // Write the content to the destination file
  fs.writeFile(destinationFilePath, data, (writeErr) => {
    if (writeErr) {
      console.error('Error writing to destination file:', writeErr);
      return;
    }

    console.log('File content copied successfully from source to destination.');
  });
});

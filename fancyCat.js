const fs = require('fs');

const filename = process.argv[2];

if (!filename) {
  console.log('Please provide a filename');
  return;
}

try {
  const content = fs.readFileSync(filename, 'utf8');

 
  console.log(content);

  
  let lineCount;

  if (content === '') {
    lineCount = 0;
  } else {
    lineCount = content.split('\n').length;

    
    if (content.endsWith('\n')) {
      lineCount--;
    }
  }

  console.log(`Line count: ${lineCount}`);
} catch (error) {
  console.log('Error: Could not read the file');
}

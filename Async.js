//////////////////////////////[async write]//////////////////////////////

const fs = require('fs');

fs.writeFile(
'section1.txt', 'sabse accha baccha 😎', 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully.');
    }  
}     
)

fs.readFile('section1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content is given by data: ' + data);
    }
});


// append
fs.appendFile('section1.txt', '\n baap coder.', 'utf8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('File appended successfully.');
    }   
});

// update read

fs.readFile('section1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content is given by data: ' + data);
    }
});

// rename file
fs.rename('promises.txt', 'promises_renamed.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
    } else {
        console.log('File renamed successfully.');
    }
});


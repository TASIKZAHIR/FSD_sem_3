const fs = require('fs').promises;

async function writeFile() {
    try {
        await fs.writeFile('promises.txt', 'sabse accha baccha 😎','utf8' );
        console.log('File written successfully.');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

writeFile();

// read file
async function readFile() {
    try {
        const data = await fs.readFile('promises.txt', 'utf8');
        console.log('File content is given by data: ' + data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFile();


async function appendFile() {
    try {
        await fs.appendFile('promises.txt', '\n baap coder.', 'utf8');
        console.log('File appended successfully.');
    } catch (err) {
        console.error('Error appending to file:', err);
    }
}

appendFile();


fs.rename('promises_renamed.txt', 'promises_renamed2.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
    } else {
        console.log('File renamed successfully.');
    }
});

//delete 

async function deleteFile() {
    try {
        await fs.unlink('index.txt');
        console.log('File deleted successfully.');
    } catch (err) {
        console.error('Error deleting file:', err);
    }
}

deleteFile();


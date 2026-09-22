const fs = require('fs');
// fs.writeFileSync('section1.txt', 'Hello, World!', 'utf8');


// console.log('File written successfully.');


 const data = fs.readFileSync('section1.txt', 'utf8');
console.log( 'file content is given by data: ' + data);


//append 

fs.appendFileSync('section1.txt', '\nThis is an appended line.', 'utf8');
console.log('File appended successfully.');

// fs.unlinkSync('example.txt');
// console.log('File deleted successfully.');

if(fs.existsSync('section1.txt')){
    console.log('file exists')
}

else{
    console.log('file not found,need to create this file');
}


///////////////////////////////////////experiment  ////////////////////////////////////////



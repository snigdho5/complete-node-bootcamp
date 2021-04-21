const fs = require('fs');


const name = 'hello world '+ between(10, 200);
console.log(name);

const fileInp = fs.readFileSync('txt/input.txt', 'utf-8');

console.log(fileInp);

const fileOut = `this is a str concat with file str: ${fileInp}.\nCreated: ${Date.now()}`;
fs.writeFileSync('txt/output.txt', fileOut);
console.log('file written with'+fileOut);


// func
function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
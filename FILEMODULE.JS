const fs=require('fs')
//fs.writeFileSync('test1.txt',"Hello World");
//const fs = require('fs');
const data = fs.readFileSync('test1.txt', 'utf8');
console.log(data);

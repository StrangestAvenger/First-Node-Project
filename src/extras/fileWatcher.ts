const fs = require('fs');
// import * as fs from 'fs'
require('log-timestamp');
// import 'log-timestamp';

const filePath = 'C:\\Users\\vinay\\OneDrive\\Desktop\\a.txt';
let file = fs.readFileSync(filePath);
console.log("initial File Content" + file);

console.log(`Watching for file changes on ${filePath}`);

fs.watch(filePath, (event:any, filename:any) => {
  if (filename) {
    console.log("event Name" + event);
    console.log(`${filename} file Changed`);
    file = fs.readFileSync(filePath);
    console.log(`file content at ` + new Date() + 'is \n' + file);
  }
  else {
    console.log('no file permision');
  }
});
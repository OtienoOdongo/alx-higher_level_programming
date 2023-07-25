#!/usr/bin/node
// writing a string to a file using fs

const fs = require('fs');
const path = 'myfile.txt';

const buf = Buffer.from('Python is cool', 'utf-8');

fs.writeFile(path, buf, { flag: 'a' }, (err) => {
  if (err) throw err;
  console.log('File has been successfully written.');
});

#!/usr/bin/node
// writing a string to a file using fs

const fs = require('fs');

// Retrieving the filename and file content from command line arguments
const myfile = process.argv[2];
const filecontent = process.argv[3];

// Writing the string to the file
fs.writeFile(myfile, filecontent, (err) => {
  if (err) throw err;
  console.log('File has been successfully written.');
});

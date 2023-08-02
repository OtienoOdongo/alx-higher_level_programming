#!/usr/bin/node
// writing a string to a file using fs

const fs = require('fs');

// Retrieving the filename and file content from command line arguments
const myfile = process.argv[2];
const filecontent = process.argv[3];

// Writing the string to the file
fs.writeFile(myfile, filecontent, 'utf-8', (error) => {
  if (error) console.log(error);
});

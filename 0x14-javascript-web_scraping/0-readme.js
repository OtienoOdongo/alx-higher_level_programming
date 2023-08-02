#!/usr/bin/node
// a script that use fs module to read a file

const fs = require('fs'); // imports built-in nodejs file system (fs) module

// retrieving a filename from the commandline
const filename = process.argv[2]; // filename is the 3rd element of process.argv array

// reading the file asynchronously
fs.readFile(filename, function (err, filecontent) {
  if (err) throw err;
  console.log(filecontent.toString()); // toString() method is used to convert buffer object to string
});

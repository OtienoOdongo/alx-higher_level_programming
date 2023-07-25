#!/usr/bin/node
//a script that use fs module to read a file 

const fs = require("fs"); //imports built-in nodejs file system (fs) module

//retrieving a filename from the commandline
const file_name = process.argv[2]; //filename is the 3rd element of process.argv array

//reading the file asynchronously
fs.readFile(file_name, (err, file_content) => {
if (err) throw err;
console.log(file_content.toString()); //toString() method is used to buffer object to string
});


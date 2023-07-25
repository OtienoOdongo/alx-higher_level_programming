#!/usr/bin/node
//a script that use fs module to read a file 

const fs = require("fs"); //imports built-in nodejs file system (fs) module

try {
  const text = fs.readFileSync("cisfun", "utf-8");
  console.log(text);
} catch (err) {
  if (err.code === "ENOENT") {
    const errorObject = {
      Error: err.message,
      errno: err.errno,
      code: err.code,
      syscall: err.syscall,
      path: err.path,
    };
    console.error(errorObject);
  } else {
    throw err;
  }
}


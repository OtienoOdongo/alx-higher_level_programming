#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filename = process.argv[3];
request.get(url, (error, response, body) => {
  if (!error) {
    fs.writeFileSync(filename, body, 'utf-8');
  }
});

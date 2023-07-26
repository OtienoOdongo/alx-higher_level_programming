#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filename = process.argv[3];
let options = { json: true };

request.get(url, options, (error, response, body) => {
  if (error) {
    return console.error(err);
  }

  if (!error && response.statusCode === 200) {
    try {
      fs.writeFileSync(filename, JSON.stringify(body, null, 2), 'utf-8');
      console.log(filename);
    } catch (err) {
      console.error(err);
    }
  }
});


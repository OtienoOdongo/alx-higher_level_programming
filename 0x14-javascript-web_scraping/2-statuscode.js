#!/usr/bin/node
// displaying a status code of GET request using request module

const request = require('request'); // imports request module

const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log('code:', response && response.statusCode); // prints statuscode
  }
});

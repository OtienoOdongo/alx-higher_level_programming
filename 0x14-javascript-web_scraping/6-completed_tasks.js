#!/usr/bin/node

const request = require('request');

const apiurl = process.argv[2];
const results = {};

request.get(apiurl, function (error, response, body) {
  if (!error) {
    const tasks = JSON.parse(body);
    for (const task of tasks) {
      const id = task.userId;
      if (results[id] === undefined) {
         results[id] = 0;
      }
      if (task.completed) {
        results[id] += 1;
      }
      if (results[id] === 0) {
        delete results[id];
      }
    }
    console.log(results);
  }
});

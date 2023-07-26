#!/usr/bin/node

const request = require('request');

const completedtasks = {};
const apiurl = process.argv[2];
request.get(apiurl, function (error, response, body) {
  if (!error) {
    const tasks = JSON.parse(body);
    for (const task of tasks) {
      const id = task.userId;
      if (completedtasks[id] === undefined) {
        completedtasks[id] = 0;
      }
      if (task.completed) {
        completedtasks[id] += 1;
      }
      if (completedtasks[id] === 0) {
        delete completedtasks[id];
      }
    }
    console.log(completedtasks);
  }
});

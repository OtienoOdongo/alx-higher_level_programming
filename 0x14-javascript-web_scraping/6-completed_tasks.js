#!/usr/bin/node

const request = require('request');

const apiurl = process.argv[2];

request.get(apiurl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    const todos = JSON.parse(body);
    const result = {};

    for (const todo of todos) {
      const id = todo.userId;
      if (result[id] === undefined) {
        result[id] = 0;
      }
      if (todo.completed) {
        result[id] += 1;
      }
      if (result[id] === 0) {
        delete result[id];
      }
    }

    console.log(result);
  }
});

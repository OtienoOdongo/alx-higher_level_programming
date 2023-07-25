#!/usr/bin/node
// using reqest module to fetch starwars api

const request = require('request'); // importing request

const movieId = process.argv[2];
const baseUrl = 'https://swapi-api.alx-tools.com/api/films/';
// concantenating baseUrl and movieId
request.get(baseUrl + movieId, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});

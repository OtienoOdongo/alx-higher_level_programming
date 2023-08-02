#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiurl = 'https://swapi-api.hbtn.io/api/films/';

request.get(apiurl + movieId, function (error, response, body) {
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  const characters = data.characters;
  for (const character of characters) {
    request.get(character, function (error, res, body1) {
      if (error) {
        console.log(error);
      }
      const moviecharacter = JSON.parse(body1);
      console.log(moviecharacter.name);
    });
  }
});

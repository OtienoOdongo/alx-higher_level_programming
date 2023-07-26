#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const characterId = '18';

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const count = data.results.reduce((acc, film) => {
      const charactersWithId18 = film.characters.filter(character => character.includes(characterId));
      return acc + charactersWithId18.length;
    }, 0);

    console.log(count);
  }
});

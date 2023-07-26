#!/usr/bin/node

const request = require('request');

function fetchFilmCharacters(filmId) {
  const filmUrl = `https://swapi-api.hbtn.io/api/films/${filmId}`;
  request(filmUrl, function (error, response, body) {
    if (!error) {
      const characters = JSON.parse(body).characters;
      printCharacters(characters, 0);
    } else {
      console.error(error);
    }
  });
}

function printCharacters(characters, index) {
  if (index >= characters.length) {
    return; // stops recursion when all characters are printed
  }

  const characterUrl = characters[index];
  request(characterUrl, function (error, response, body) {
    if (!error) {
      const characterData = JSON.parse(body);
      console.log(characterData.name);
      printCharacters(characters, index + 1); // Recursively call the next character
    } else {
      console.error(error);
    }
  });
}

const filmId = process.argv[2];
if (filmId) {
  fetchFilmCharacters(filmId);
}


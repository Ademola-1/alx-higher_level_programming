#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const API_URL = 'https://swapi-api.hbtn.io/api/films/' + movieId;

request(API_URL, (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    const filmData = JSON.parse(body);
    const characterUrls = filmData.characters;

    characterUrls.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error(charError);
        } else if (charResponse.statusCode === 200) {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
        }
      });
    });
  } else {
    console.log(`An error occurred. Status code: ${response.statusCode}`);
  }
});

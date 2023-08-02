
$(function() {
    $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
        const results = data.results;
        for (const movie of results) {
          $('#list_movies').append('<li>' + movie.title + '</li>');
        }
    });
  });

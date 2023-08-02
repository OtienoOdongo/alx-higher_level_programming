//adding class red in the <header> when user clicks on #red_header

$(function() {
    $('#red_header').on('click', function() {
        $('header').addClass('red');
    });
  });

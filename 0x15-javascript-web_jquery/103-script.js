

$(function() {
    const url = 'https://stefanbohacek.com/hellosalut/';
    $('#btn_translate').on('click', function () {
        lang = $('#language_code').val();
        $.get(url, { lang: lang }, function (data, status) {
          if (status === 'success') {
            $('#hello').text(data.hello);
          }
        });
      });
      $('#language_code').on('keypress', function (event) {
        if (event.which === 13) {
          $('#btn_translate').click();
        }
      });
  });

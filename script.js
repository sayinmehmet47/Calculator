var value;
var equal;

$('.btn').on('click', function (e) {
  value = Number($(this).val());
  $('#clear').on('click', function (e) {
    value = 0;
    $('.equal').text('0');
  });

  equal = Number($('.equal').text());

  if (equal === 0) {
    $('.equal').text(value);
  }

  $('.equal').append(value);

  e.preventDefault();
});

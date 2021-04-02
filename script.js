var value;
var previous;
var text;
var current = 0;

$('.num').on('click', function (e) {
  value = $(this).val();
  if($(".result").text()==="0"){
    $(".result").text("")
    $(".previous").text("")

  }
  $(".result").append(value)
  $(".previous").append(value)
  console.log($(".result").text())


  e.preventDefault();
});

//clearing the screen
$('#clear').on('click', function (e) {
  ui.clear();
});
//adding operators
$('.operator').on('click', function (e) {
  const operator = $(this).val();

  if (ui.confirmation()) {
    $('.result').append(operator);
    $(".previous").append(operator)

  }

  e.preventDefault();
});

// when clicking on equal
$('#equals').on('click', function (e) {
  ui.display();
  console.log(Math.ceil(0.4000000))

  e.preventDefault();
});

//point on click
$('#decimal').on('click', function (e) {
  if (ui.confirmationDot()) {
    $('.result').append($(this).val());
      $(".previous").append(".")

  }

  e.preventDefault();
});



//minus
$('.minus').on('click', function (e) {
  if (Number($('.result').text()) === 0) {
    $('.result').text('-');
    $('#display1').text('-');
  } 
  e.preventDefault();
});

//zero
$('#zero').on('click', function (e) {
  
  $('.result').append("0");
  $(".previous").append("0")

  e.preventDefault();
});
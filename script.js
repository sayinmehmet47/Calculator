var value;
var previous = Number($('.result').text());
var text;
var current = 0;

$('.num').on('click', function (e) {
  value = Number($(this).val());

  if (previous == 0) {
    previous = Number($('.result').text(`${value}`).text());
  } else {
    $('.result').append(`${value}`);
    previous = Number($('.result').text());
    text=$('.result').text()
    
   
    console.log(eval(text))

  }

  e.preventDefault();
});



//clearing the screen
$('#clear').on('click', function (e) {
  ui.clear();
});
//adding operators
$('.operator').on('click', function (e) {
  const operator = $(this).val();

  if(ui.confirmation()){

    $('.result').append(operator);
    text=$(".result").text()

  }

  e.preventDefault();
});


// when clicking on equal
$('#equals').on('click', function (e) {
 
  ui.display()


  e.preventDefault();
});




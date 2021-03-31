var value;
var previous=Number($(".result").text());
var current=0;




$('.num').on('click', function (e) {
  value = Number($(this).val());

  if(previous==0){

   previous=Number($(".result").text(`${value}`).text())
   console.log(previous)
   

  }else{
    $(".result").append(`${value}`)
    previous=Number($(".result").text())
   
    console.log(previous)

  }

  

  e.preventDefault();
});


//clearing the screen
$("#clear").on("click",function(e){

  const ui=new Calculator(previous,current)
  ui.clear()




})
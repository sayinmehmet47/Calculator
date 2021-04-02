class Calculator {
  constructor(previous, current, text) {
    this.previous = previous;
    this.current = current;
    this.text = text;
  }

  clear() {
    $('.result').text('0');
    $('.previous').text('0');

  }

  confirmationDot() {
    let arr = $('.result').text().split('');
    let last = arr[arr.length - 1];
     if (last ===".") {
       return false;
     } else {
       return true;
     }
  
  }
  confirmation() {
    let arr = $('.result').text().split('');
    let last = arr[arr.length - 1];
    console.log(last)
    return true
  }



  display() {
    console.log($('.result').text());
    $('.previous').text($('.result').text());
    $('.result').text(eval($('.result').text()));
  
  }
}

const ui = new Calculator(previous, current, text);

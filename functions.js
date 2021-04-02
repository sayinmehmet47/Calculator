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

    const str =$('.result').text();
    const result = /(\d\.\d+)(?!\+|\-|\*|\/)/gi.test(str);
    console.log(result); // true




    let last = arr[arr.length - 1];
     if (last ==="."||result===true) {
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
    var filtered=$(".result").text().match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join("")
    console.log(eval(filtered))
    $('.previous').text(filtered);
    $('.result').text(eval(filtered));
  
  }
}

const ui = new Calculator(previous, current, text);

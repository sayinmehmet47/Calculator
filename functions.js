class Calculator {
  constructor(previous, current, text) {
    this.previous = previous;
    this.current = current;
    this.text = text;
  }

  clear() {
    $('.result').text('0');
    $('.previous').text('0');

    previous = 0;
  }

  confirmation() {
    let arr = $('.result').text().split('');
    let last = arr[arr.length - 1];
    console.log(last === '*');
    if (
      last === '*' ||
      last === '+' ||
      last === '/' ||
      last === '-' ||
      last === '='
    ) {
      return false;
    } else {
      return true;
    }
  }

  display() {
    console.log(text);
    $('.result').text(eval(text));
    $('.previous').text(text);
  }
}

const ui = new Calculator(previous, current, text);

let displayValue;
let firstNumber;
let secondNumber;
let operator;
let result;

let screen = document.querySelector('.screen');

// Buttons
let button1 = document.querySelector('.button1');
button1.addEventListener('click', setNumbers);
let button2 = document.querySelector('.button2');
button2.addEventListener('click', setNumbers);
let button3 = document.querySelector('.button3');
button3.addEventListener('click', setNumbers);
let button4 = document.querySelector('.button4');
button4.addEventListener('click', setNumbers);
let button5 = document.querySelector('.button5');
button5.addEventListener('click', setNumbers);
let button6 = document.querySelector('.button6');
button6.addEventListener('click', setNumbers);
let button7 = document.querySelector('.button7');
button7.addEventListener('click', setNumbers);
let button8 = document.querySelector('.button8');
button8.addEventListener('click', setNumbers);
let button9 = document.querySelector('.button9');
button9.addEventListener('click', setNumbers);
let button0 = document.querySelector('.button0');
button0.addEventListener('click', setNumbers);

let buttonAdd = document.querySelector('.button-add');
buttonAdd.addEventListener('click', setOperator);
let buttonSubtract = document.querySelector('.button-subtract');
buttonSubtract.addEventListener('click', setOperator);
let buttonMultiply = document.querySelector('.button-multiply');
buttonMultiply.addEventListener('click', setOperator);
let buttonDivide = document.querySelector('.button-divide');
buttonDivide.addEventListener('click', setOperator);

let buttonEquals = document.querySelector('.button-equals');
buttonEquals.addEventListener('click', function () { operate(operator, firstNumber, secondNumber) });

let buttonAC = document.querySelector('.button-ac');
buttonAC.addEventListener('click', ac);

function ac() {
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
  screen.innerHTML = 0;
}

function setNumbers(e) {
  if (firstNumber == undefined) {
    firstNumber = parseInt(e.target.innerHTML);
    console.log(firstNumber);
  } else if (operator == undefined) {
    firstNumber += '' + e.target.innerHTML;
    firstNumber = parseInt(firstNumber);
    console.log(firstNumber);
  } else if (secondNumber == undefined) {
    secondNumber = parseInt(e.target.innerHTML);
    console.log(secondNumber)
  } else {
    secondNumber += '' + e.target.innerHTML;
    secondNumber = parseInt(secondNumber);
    console.log(secondNumber);
  }
}

function setOperator(e) {
  operator = e.target.innerHTML;
  console.log(operator);
}

// Operation functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}


// Operator, calls operation functions
function operate(operatorSign, a, b) {
  switch (operatorSign) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "x":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
  }
  console.log(result);
  result = Math.round(result * 10000) / 10000;
  screen.innerHTML = result;
  firstNumber = result;
  secondNumber = undefined;
  operator = undefined;
  return result;
}

// Populates display
function display(operate) {
  displayValue = operate;
  return displayValue;
}
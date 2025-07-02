let first_num = '';
let second_num = '';
let oper = '';
let displayValue = '';
let resultDisplayed = false;


const display = document.getElementById('display');

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const val = button.textContent;

    if (val === '=') {
      if (first_num && oper && displayValue !== '') {
      second_num = displayValue;
      let result = operation(first_num, second_num, oper);
      result = Math.round(result * 1000) / 1000;
      display.textContent = result;
      displayValue = result.toString(); // so you can chain more ops
      first_num = result;
      second_num = '';
      oper = '';
      resultDisplayed = true;
      }
    } else if (val === '.') {
      if (!displayValue.includes('.')) {
        displayValue += '.';
        display.textContent = displayValue;
      }
    } else {
      if (resultDisplayed) {
        displayValue = val;
        resultDisplayed = false;
      } else {
        displayValue += val;
      }
      display.textContent = displayValue;
    }
  });
});

// Operator buttons
const ops = document.querySelectorAll('.btn_op');

ops.forEach(op => {
  op.addEventListener('click', () => {
    if (first_num && oper && displayValue !== '') {
      second_num = displayValue;
      let result = operation(first_num, second_num, oper);
      result = Math.round(result * 1000) / 1000;
      display.textContent = result;
      first_num = result;
    } else {
      first_num = displayValue;
    }
    oper = op.textContent;
    first_num = displayValue;
    displayValue = '';
  });
});

document.getElementById('clear').addEventListener('click', () => {
  first_num = '';
  second_num = '';
  oper = '';
  displayValue = '';
  display.textContent = '';
});


function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function divide(a,b){
    if(b == 0){
        return "Error";
    }else{
        return a/b;
    }
}

function multiply(a,b){
    return a * b;
}

function operation(first_num,second_num,operation){
    first_num = parseFloat(first_num);
    second_num = parseFloat(second_num);

    if(operation == '+'){
        return add(first_num,second_num);
    }else if(operation == '-'){
        return sub(first_num,second_num);
    }else if(operation == '/'){
        return divide(first_num,second_num);
    }else{
        return multiply(first_num,second_num);
    }
};
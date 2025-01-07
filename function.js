// VARIABLES

function ButtonNumber(documentId,value) {
    this.element = document.querySelector(documentId),
    this.value = value
}

function ButtonOperator(documentId,value) {
    this.element = document.querySelector(documentId),
    this.value = value
}

const buttonOne = new ButtonNumber("#one","1");
const buttonTwo = new ButtonNumber("#two","2");
const buttonThree = new ButtonNumber("#three","3");
const buttonFour = new ButtonNumber("#four","4");
const buttonFive = new ButtonNumber("#five","5");
const buttonSix = new ButtonNumber("#six","6");
const buttonSeven = new ButtonNumber("#seven","7");
const buttonEight = new ButtonNumber("#eight","8");
const buttonNine = new ButtonNumber("#nine","9");
const buttonZero = new ButtonNumber("#zero","0");

const buttonPlus = new ButtonOperator("#plus","+");
const buttonMinus = new ButtonOperator("#minus","-");
const buttonDivision = new ButtonOperator("#division","/");
const buttonMultiplication = new ButtonOperator("#multiplication","x");

const buttonFloat = document.querySelector("#float");

const buttonEqual = document.querySelector("#equal");
const buttonClear = document.querySelector("#clear");
const buttonBackspace = document.querySelector("#backspace");

let screenValue = document.querySelector("#screen");

const calculator = (function () {
    let currentValue = "";
    let firstOperand;
    let secondOperand;
    let operator;
    let result;
    return { currentValue, firstOperand, secondOperand, operator, result };
  })();

// FUNCTIONS


function ListenerNumber(button) {
    button.element.addEventListener("click", () => {
        if (calculator.currentValue == "0") {
            calculator.currentValue = button.value;
            showCurrentValue();
        } else {
        calculator.currentValue += button.value;
        showCurrentValue();
        }  
    })
}

function ListenerOperator(button) {
    button.element.addEventListener("click", () => {
        if (!calculator.operator) {
            calculator.firstOperand = Number(calculator.currentValue);
            calculator.currentValue = "";
            showCurrentValue();
            calculator.operator = button.value;
        } else if (calculator.currentValue != "" && calculator.firstOperand != undefined) {
            eval();
            calculator.operator = button.value;
            calculator.firstOperand = calculator.result;
        } else {
            calculator.operator = button.value;
            }
    })
}

function showCurrentValue() {
    screenValue.textContent = calculator.currentValue;
}

function showCurrentResult() {
    screenValue.textContent = calculator.result;
}

function clearCurrentValue() {
    calculator.currentValue = "";
    showCurrentValue();
}

function backspace() {
    calculator.currentValue = calculator.currentValue.substring(0, calculator.currentValue.length-1);
    showCurrentValue();
}

function eval() {
    calculator.secondOperand = Number(calculator.currentValue);
    if (calculator.operator == "+") {
        calculator.operator = "";
        calculator.result = calculator.firstOperand + calculator.secondOperand;
        calculator.firstOperand = undefined;
        calculator.secondOperand = undefined;
        calculator.currentValue = "";
        showCurrentResult();
    } else if (calculator.operator == "-") {
        calculator.operator = "";
        calculator.result = calculator.firstOperand - calculator.secondOperand;
        calculator.firstOperand = undefined;
        calculator.secondOperand = undefined;
        calculator.currentValue = "";
        showCurrentResult();
    } else if (calculator.operator == "/") {
        calculator.operator = "";
        calculator.result = calculator.firstOperand / calculator.secondOperand;
        calculator.firstOperand = undefined;
        calculator.secondOperand = undefined;
        calculator.currentValue = "";
        showCurrentResult();
    } else if (calculator.operator == "x") {
        calculator.operator = "";
        calculator.result = calculator.firstOperand * calculator.secondOperand;
        calculator.firstOperand = undefined;
        calculator.secondOperand = undefined;
        calculator.currentValue = "";
        showCurrentResult();
    }
}


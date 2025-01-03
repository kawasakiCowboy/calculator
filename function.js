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

let currentValue = "";
let firstOperand;
let secondOperand;
let operator;
let result;


// FUNCTIONS


function ListenerNumber(button) {
    button.element.addEventListener("click", () => {
        if (currentValue == "0") {
            currentValue = button.value;
            showCurrenValue();
        } else {
        currentValue += button.value;
        showCurrenValue();
        }  
    })
}

function ListenerOperator(button) {
    button.element.addEventListener("click", () => {
        if (!operator) {
            firstOperand = Number(currentValue);
            currentValue = "";
            showCurrenValue();
            operator = button.value;
        } else if (currentValue != "" && firstOperand != undefined) {
            eval();
            operator = button.value;
            firstOperand = result;
        } else {
            operator = button.value;
            }
    })
}

function showCurrenValue() {
    screenValue.textContent = currentValue;
}

function showCurrenResult() {
    screenValue.textContent = result;
}

function clearCurrentValue() {
    currentValue = "";
    showCurrenValue();
}

function backspace() {
    currentValue = currentValue.substring(0, currentValue.length-1);
    showCurrenValue();
}

function eval() {
    secondOperand = Number(currentValue);
    if (operator == "+") {
        operator = "";
        result = firstOperand + secondOperand;
        firstOperand = undefined;
        secondOperand = undefined;
        currentValue = "";
        showCurrenResult();
    } else if (operator == "-") {
        operator = "";
        result = firstOperand - secondOperand;
        firstOperand = undefined;
        secondOperand = undefined;
        currentValue = "";
        showCurrenResult();
    } else if (operator == "/") {
        operator = "";
        result = firstOperand / secondOperand;
        firstOperand = undefined;
        secondOperand = undefined;
        currentValue = "";
        showCurrenResult();
    } else if (operator == "x") {
        operator = "";
        result = firstOperand * secondOperand;
        firstOperand = undefined;
        secondOperand = undefined;
        currentValue = "";
        showCurrenResult();
    }
}


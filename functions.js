// 1. Every click renders a number
// 2. When operator is clicked after a number first number fades away
// 3. User can input second number
// 4. Using any operator will result in evaluated number on screen which ca be used as first number and so on
//
// 1. Variable to store first number
// 2. Variable to store operator
// 3. Variable to store second number
// 4. Variable to store current value (string)
// 5. Function that renders screen
// 6. Function that evaluates
//

// VARIABLES

const buttonZero = document.querySelector("#zero");
const buttonFloat = document.querySelector("#float");

const buttonEqual = document.querySelector("#equal");
const buttonPlus = document.querySelector("#plus");
const buttonMinus = document.querySelector("#minus");
const buttonDivision = document.querySelector("#division");
const buttonMultiplication = document.querySelector("#multiplication");
const buttonClear = document.querySelector("#clear");
const buttonBackspace = document.querySelector("#backspace");
let screenValue = document.querySelector("#screen");

let currentValue = "";
let firstOperand;
let secondOperand;
let operator;
let result;


// LISTENERS ON OPERANDS

buttonZero.addEventListener("click", () => {
    if (currentValue.includes(".") || currentValue != "0") {
        currentValue += "0";
        showCurrenValue();
    } else {
        showCurrenValue();
    }
});

buttonFloat.addEventListener("click", () => {
    if (currentValue.includes(".")) {
        showCurrenValue();
    } else if (currentValue == "") {
        currentValue += "0.";
        showCurrenValue();
    } else {
        currentValue += ".";
        showCurrenValue();
    }
});

// LISTENERS ON CLEAR FUNCTIONS

buttonClear.addEventListener("click", () => {
    clearCurrentValue();
});

buttonBackspace.addEventListener("click", () => {
    backspace();
});


// LISTENERS ON OPERATORS
buttonEqual.addEventListener("click", () => {
    eval();
})

buttonPlus.addEventListener("click", () => {
    if (!operator) {
        firstOperand = Number(currentValue);
        currentValue = "";
        showCurrenValue();
        operator = "+";
    } else if (currentValue != "" && firstOperand != undefined) {
        eval();
        operator = "+";
        firstOperand = result;
    } else {
        operator = "+";
    }
})

buttonMinus.addEventListener("click", () => {
    if (!operator) {
        firstOperand = Number(currentValue);
        currentValue = "";
        showCurrenValue();
        operator = "-";
    } else if (currentValue != "" && firstOperand != undefined) {
        eval();
        operator = "-";
        firstOperand = result;
    } else {
        operator = "-";
    }
})

buttonDivision.addEventListener("click", () => {
    if (!operator) {
        firstOperand = Number(currentValue);
        currentValue = "";
        showCurrenValue();
        operator = "/";
    } else if (currentValue != "" && firstOperand != undefined) {
        eval();
        operator = "/";
        firstOperand = result;
    } else {
        operator = "/";
    }
})

buttonMultiplication.addEventListener("click", () => {
    if (!operator) {
        firstOperand = Number(currentValue);
        currentValue = "";
        showCurrenValue();
        operator = "x";
    } else if (currentValue != "" && firstOperand != undefined) {
        eval();
        operator = "x";
        firstOperand = result;
    } else {
        operator = "x";
    }
})


// FUNCTIONS

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
    currentValue = currentValue.substring(0, currentValue.length - 1);
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

/**
 * @param {string} number
 */
function numberClick(number) {
    if (currentValue === "0") {
        currentValue = number
        showCurrenValue();
    } else {
        currentValue += number;
        showCurrenValue();
    }
}

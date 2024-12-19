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

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonFour = document.querySelector("#four");
const buttonFive = document.querySelector("#five");
const buttonSix = document.querySelector("#six");
const buttonSeven = document.querySelector("#seven");
const buttonEight = document.querySelector("#eight");
const buttonNine = document.querySelector("#nine");
const buttonZero = document.querySelector("#zero");
const buttonFloat = document.querySelector("#float");

const buttonEqual = document.querySelector("#equal");
const buttonPlus = document.querySelector("#plus");
const buttonMinus= document.querySelector("#minus");
const buttonDivision = document.querySelector("#division");
const buttonClear = document.querySelector("#clear");
const buttonBackspace = document.querySelector("#backspace");
let screenValue = document.querySelector("#screen");

let currentValue = "";
let firstOperand;
let secondOperand;
let operator;


// LISTENERS ON OPERANDS

buttonOne.addEventListener("click",() => {
    if (currentValue == "0") {
        currentValue = "1"
        showCurrenValue();
    } else {
    currentValue += "1";
    showCurrenValue();
    }
});

buttonTwo.addEventListener("click",() => {
    if (currentValue == "0") {
        currentValue = "2"
        showCurrenValue();
    } else {
    currentValue += "2";
    showCurrenValue();
    }
});

buttonThree.addEventListener("click",() => {
    if (currentValue == "0") {
        currentValue = "3"
        showCurrenValue();
    } else {
    currentValue += "3";
    showCurrenValue();
    }
});

buttonFour.addEventListener("click",() => {
    if (currentValue == "0") {
        currentValue = "4"
        showCurrenValue();
    } else {
    currentValue += "4";
    showCurrenValue();
    }
});

buttonFive.addEventListener("click",() => {
    if (currentValue == "0") {
        currentValue = "5"
        showCurrenValue();
    } else {
    currentValue += "5";
    showCurrenValue();
    }
});

buttonSix.addEventListener("click",() => {
    if (currentValue == "0") {
        currentValue = "6"
        showCurrenValue();
    } else {
    currentValue += "6";
    showCurrenValue();
    }
});

buttonSeven.addEventListener("click",() => {
    if (currentValue == "0") {
        currentValue = "7"
        showCurrenValue();
    } else {
    currentValue += "7";
    showCurrenValue();
    }
});

buttonEight.addEventListener("click",() => {
    if (currentValue == "0") {
        currentValue = "8"
        showCurrenValue();
    } else {
    currentValue += "8";
    showCurrenValue();
    }
});

buttonNine.addEventListener("click",() => {
    if (currentValue == "0") {
        currentValue = "9"
        showCurrenValue();
    } else {
    currentValue += "9";
    showCurrenValue();
    }
});

buttonZero.addEventListener("click",() => {
    if (currentValue.includes(".") || currentValue != "0") {
        currentValue += "0";
        showCurrenValue();
    } else {
        showCurrenValue();
    }
});

buttonFloat.addEventListener("click",() => {
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

buttonClear.addEventListener("click",() => {
    clearCurrentValue();
});

buttonBackspace.addEventListener("click",() => {
    backspace();
});


// LISTENERS ON OPERATORS
buttonEqual.addEventListener("click", () => {
    eval();
})

buttonPlus.addEventListener("click", () => {
    firstOperand = Number(currentValue);
    currentValue = "";
    showCurrenValue();
    operator = "+";
})


// FUNCTIONS

function showCurrenValue() {
    screenValue.textContent = currentValue;
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
        currentValue = firstOperand + secondOperand;
        firstOperand = undefined;
        secondOperand = undefined;
        showCurrenValue();
    }
}
// LISTENERS

buttonZero.element.addEventListener("click",() => {
    if (calculator.currentValue.includes(".") || calculator.currentValue != buttonZero.value) {
        calculator.currentValue += buttonZero.value;
        showCurrentValue();
    } else {
        showCurrentValue();
    }
});

buttonFloat.addEventListener("click",() => {
    if (calculator.currentValue.includes(".")) {
        showCurrentValue();
    } else if (calculator.currentValue == "") {
        calculator.currentValue += "0.";
        showCurrentValue();
    } else {
    calculator.currentValue += ".";
    showCurrentValue();
    }
});

buttonMinus.element.addEventListener("click", () => {
    if (calculator.currentValue === "") {
        calculator.currentValue += buttonMinus.value;
        showCurrentValue();  
    } else {
        if (calculator.currentValue === "-") {
            showCurrentValue();  
        }
        else if (!calculator.operator) {
            calculator.firstOperand = Number(calculator.currentValue);
            calculator.currentValue = "";
            showCurrentValue();
            calculator.operator = buttonMinus.value;
        } else if (calculator.currentValue != "" && calculator.firstOperand != undefined) {
            eval();
            calculator.operator = buttonMinus.value;
            calculator.firstOperand = calculator.result;
        } else {
            calculator.operator = buttonMinus.value;
            }
    }
})

new ListenerNumber(buttonOne);
new ListenerNumber(buttonTwo);
new ListenerNumber(buttonThree);
new ListenerNumber(buttonFour);
new ListenerNumber(buttonFive);
new ListenerNumber(buttonSix);
new ListenerNumber(buttonSeven);
new ListenerNumber(buttonEight);
new ListenerNumber(buttonNine);
new ListenerOperator(buttonPlus);
new ListenerOperator(buttonDivision);
new ListenerOperator(buttonMultiplication);

buttonEqual.addEventListener("click", () => {
    eval();
})

buttonClear.addEventListener("click",() => {
    clearCurrentValue();
});

buttonBackspace.addEventListener("click",() => {
    backspace();
});

// FUNCTIONS


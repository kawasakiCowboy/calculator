// LISTENERS

buttonZero.element.addEventListener("click",() => {
    if (currentValue.includes(".") || currentValue != buttonZero.value) {
        currentValue += buttonZero.value;
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
new ListenerOperator(buttonMinus);
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


function Calculator() {
    this.firstOperand = undefined;
    this.secondOperand = undefined;
    this.operator = undefined;
    this.result = undefined;

    this.numberPressed = function(number) {
        if (this.firstOperand === undefined) {
            this.firstOperand = number;
        } else {
            this.secondOperand = number;
        }
    }

    this.plusPressed = function() {
        this.operator = "+";
    }

    this.minusPressed = function() {

    }

    this.divisionPressed = function() {

    }

    this.multiplicationPressed = function() {

    }

    this.equalPressed = function() {
        if (this.firstOperand === undefined) {
            alert("No first operand");
            return;
        }
        if (this.secondOperand === undefined) {
            alert("No second operand");
            return;
        }
        if (this.operator === undefined) {
            alert("No operator");
            return;
        }
        this.__calculate();
    }

    this.__calculate = function() {
        if (this.operator === "+") {
            this.result = this.firstOperand + this.secondOperand;
        }
        alert("result is: " + this.result)
    }
}
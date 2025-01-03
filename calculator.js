function Calculator() {
    this.firstOperand = undefined;
    this.secondOperand = undefined;
    this.operator = undefined;
    this.result = undefined;
    this.numberPressed = function(number) {
        console.log(number)
        if (typeof this.firstOperand === undefined) {
            this.firstOperand = number;
        } else {
            this.secondOperand = number;
        }
    }
    this.plusPressed = function() {
        this.operator = "+";
        console.log(`plus pressed` + this.firstOperand);
    }
    this.minusPressed = function() {

    }
    this.divisionPressed = function() {

    }
    this.multiplicationPressed = function() {

    }
    this.equalPressed = function() {
        if (typeof this.firstOperand === undefined) {
            alert("No first operand");
            return;
        }
        if (typeof this.secondOperand === undefined) {
            alert("No second operand");
            return;
        }
        if (typeof this.operator === undefined) {
            alert("No operator");
            return;
        }
        this.__calculate();
    }
    this.__calculate = function() {
        if (this.operator = "+") {
            this.result = this.firstOperand + this.secondOperand;
        }
        console.log(this.firstOperand);
        console.log(this.secondOperand);
        console.log(this.result);
    }

}
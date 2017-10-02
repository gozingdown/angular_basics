var app = angular.module("caculator", [])

app.controller("CalculatorCtrl", CalculatorCtrl)


// two implementations:
function CalculatorCtrl() {
    // this.result = 0;
    // this.buttonClick = function(operator) {
    //     this.operator = operator
    // };

    // this.computeResult = function() {
    //     var number1 = parseFloat(this.num1);
    //     var number2 = parseFloat(this.num2);
    //     if(this.operator === '+') {
    //         this.result = number1 + number2;
    //     } else if (this.operator === '-') {
    //         this.result = number1 - number2;
    //     } else if (this.operator === '*') {
    //         this.result = number1 * number2;
    //     } else if (this.operator === '/') {
    //         this.result = number1 / number2;
    //     }
    // };
    this.result = 0
    this.caculate = function(operator) {
        this.operator = operator
        num1 = parseFloat(this.num1)
        num2 = parseFloat(this.num2)
        if (operator === '+') {
            this.result = num1 + num2
        } else if (operator === '-') {
            this.result = num1 - num2
        } else if (operator === '*') {
            this.result = num1 * num2
        } else if (operator === '/') {
            this.result = num1 / num2
        }
    }
}

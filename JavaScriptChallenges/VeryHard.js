var num1 = parseInt(prompt('Give me a number'))
var num2 = parseInt(prompt("Give me a second number"))
var functions = prompt("Give me a function(+,-,*,/)")
if (functions == '+') {
    var addNumbers = addition(num1, num2);
    function addition(num1, num2) {
        return num1 + num2;
    }
    console.log(num1 + functions + num2 + '=' + addNums)
} else if (functions == '-') {
    var addNums = subtraction(num1, num2);
    function subtraction(num1, num2) {
        return num1 - num2;
    }
    console.log(num1 + functions + num2 + '=' + addNums)
}
if (functions == '*') {
    var addNums = multiply(num1, num2);
    function multiply(num1, num2) {
        return num1 * num2;
    }
    console.log(num1 + functions + num2 + '=' + addNums)
}
if (functions == '/') {
    var addNums = divide(num1, num2);
    function divide(num1, num2) {
        return num1 / num2;
    }
    console.log(num1 + functions + num2 + '=' + addNums)
} 

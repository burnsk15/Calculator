// function to add operands
let add = (a, b) => a + b;

// funtion to subtract operands
let subtract = (a, b) => a - b;

// function to multiple operands
let multiple = (a, b) => a * b;

// function to divide operands
let divide = (a, b) => a / b;

// function to take two values and an operator and call one of the above functions
let operate = function(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiple(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

// function to display buttons pushed and results
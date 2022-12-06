//

// function to add operands
let add = (a, b) => (Number(a) + Number(b));

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
    } else if (operator === "x") {
        return multiple(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else {
        return "operate function ran"
    }
}

// global variables
var results = 0;
var firstNum = 0;
var operator = "";
var secondNum = 0;

// function to display buttons pushed and results
let display = function(num) {
    const displayPara = document.getElementById('results');

    if (num === "=") {
        secondNum = displayPara.textContent;
        //console.log(secondNum);
        results = operate(firstNum, secondNum, operator);
        displayPara.innerText = results;
        firstNum = results;
    } else if (num === "+" || num === "-" || num === "x" || num === "/") {
        operator = num;
        firstNum = displayPara.textContent;
        displayPara.textContent = "";
       
    } else if (num === "clear") {
        displayPara.textContent = "";
        firstNum = 0;
        secondNum = 0;
        operator = "";
        results = 0;
        console.log(firstNum);
        console.log(operator);
    } else {
        displayPara.innerText += num;
    }
}


// eventlisteners for each button
let one = document.querySelector("#one");
one.addEventListener('click', () => display(1));
let two = document.querySelector("#two");
two.addEventListener('click', () => display(2));
let three = document.querySelector("#three");
three.addEventListener('click', () => display(3));
let four = document.querySelector("#four");
four.addEventListener('click', () => display(4));
let five = document.querySelector("#five");
five.addEventListener('click', () => display(5));
let six = document.querySelector("#six");
six.addEventListener('click', () => display(6));
let seven = document.querySelector("#seven");
seven.addEventListener('click', () => display(7));
let eight = document.querySelector("#eight");
eight.addEventListener('click', () => display(8));
let nine = document.querySelector("#nine");
nine.addEventListener('click', () => display(9));
let zero = document.querySelector("#zero");
zero.addEventListener('click', () => display(0));
let dot = document.querySelector("#dot");
dot.addEventListener('click', () => display("."));
let plus = document.querySelector("#plus");
plus.addEventListener('click', () => display("+"));
let minus = document.querySelector("#minus");
minus.addEventListener('click', () => display("-"));
let multiply = document.querySelector("#multiply");
multiply.addEventListener('click', () => display("x"));
let divided = document.querySelector("#divide");
divided.addEventListener('click', () => display("/"));
let equals = document.querySelector("#equals");
equals.addEventListener('click', () => display("="));
let clear = document.querySelector("#clr");
clear.addEventListener('click', () => display("clear"));

//
// initialize calculator variables
let display = document.getElementById("display");
display.textContent = "";
let previousValue = 0;
let operation;

// set up digit click events
const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => {
    digit.addEventListener("click", (event) => {
        display.textContent += digit.id;
    });
});

// clears display and variables
const clear = document.getElementById("clear");
clear.addEventListener("click", (event) => {
    display.textContent = "";
    operation = "";
    previousValue = 0;
});

// set up operator events
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        operation = operator.id;
        previousValue = Number(display.textContent);
        display.textContent = "";
    });
});

const equals = document.getElementById("equals");
equals.addEventListener("click", (event) => {
    const toDisplay = operate(operation, previousValue, Number(display.textContent));
    display.textContent = toDisplay;
    previousValue = toDisplay;
});

// Functions for calculator functionality
function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by 0.";
    } else {
        return a/b;
    }
}

function power(base, power) {
    return base**power;
}

function operate(operation, a, b) {
    switch (operation) {
        case "add":
            return add(a, b);
            break;
        case "subtract":
            return subtract(a, b);
            break;
        case "multiply":
            return multiply(a, b);
            break;
        case "divide":
            return divide(a, b);
            break;
    }
}
// add a, b
function add(a, b) {
    return a+b;
}

// subtract b from a
function subtract(a, b) {
    return a-b;
}

// multiply a by b
function multiply(a, b) {
    return a*b;
}

// divide a by b
function divide(a, b) {
    if (b === 0) {
        return "ERROR: cannot divide by 0";
    } else {
        return a/b;
    }
}

function power(base, power) {
    return base**power;
}

// pass in add, subtract, multiply, divide, or power and return desired result
function operate(operation, a, b) {
    switch (operation) {
        case "add":
            return add(a, b);
            break;
        case "subtraction":
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

let display = document.getElementById("display");
display.textContent = "";
let previousValue = 0;
let operation;

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => {
    digit.addEventListener("click", (event) => {
        display.textContent += digit.id;
    });
});

const clear = document.getElementById("clear");
clear.addEventListener("click", (event) => {
    display.textContent = "";
    operation = "";
    previousValue = 0;
});

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
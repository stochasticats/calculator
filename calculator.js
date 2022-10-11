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
function operate(operator, a, b) {
    return operator(a,b);
}
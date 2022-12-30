function add(a, b) {
    return Math.round(((+a + +b) + Number.EPSILON) * 1000) / 1000;
}

function subtract(a, b) {
    return Math.round(((+a - +b) + Number.EPSILON) * 1000) / 1000;
}

function multiply(a, b) {
    return Math.round(((+a * +b) + Number.EPSILON) * 1000) / 1000;
}

function divide(a, b) {
    return Math.round(((+a / +b) + Number.EPSILON) * 1000) / 1000;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        default:
            return 0;
    }
}
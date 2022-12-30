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
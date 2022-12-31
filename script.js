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
            if (+b === 0) {
                alert("You cannot divide by 0");
                return 0;
            }
            return divide(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        default:
            return 0;
    }
}

function populate() {

}

function emptyDisplay() {
    document.getElementById("input").value = null;
}

function onClickDigit(button) {
    value = document.getElementById("input").value;
    if (value === "0" && button.innerText !== "0") {
        emptyDisplay();
        document.getElementById("input").value = button.innerText;
    } else if (value !== "0" || button.innerText !== "0") {
        document.getElementById("input").value = value + button.innerText;
    }
}

function onClickOperator(button) {
    if (!firstValue && document.getElementById("input").value != null) {
        firstValue = document.getElementById("input").value;
        emptyDisplay();
    } else if (firstValue) {
        firstValue = operate(operator, firstValue, document.getElementById("input").value);
        emptyDisplay();
    }
    operator = button.innerText;
}

function onClickEqual(button) {
    if (document.getElementById("input").value) {
        if (firstValue) {
            secondValue = document.getElementById("input").value;
            emptyDisplay();
            document.getElementById("input").value = operate(operator, firstValue, secondValue);

        }
    }
}

function onClickClear() {
    emptyDisplay();
    firstValue = null;
    secondValue = null;
    operator = null;
}

let firstValue = null;
let secondValue = null;
let operator = null;


emptyDisplay();

let value;
buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("digit")) {
            onClickDigit(button)
        } else if (button.classList.contains("operator")) {
            onClickOperator(button);
        } else if (button.classList.contains("equal")) {
            onClickEqual(button);
        } else if (button.classList.contains("clear")) {
            onClickClear();
        }
    });
});


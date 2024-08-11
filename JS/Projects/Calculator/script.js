let displayValue = '';
let operator = '';
let result = null;

function appendNumber(number) {
    if (displayValue === '0' && number !== '.') {
        displayValue = '';
    }
    displayValue += number;
    updateDisplay();
}

function appendOperator(op) {
    if (displayValue === '') return;
    if (result !== null) {
        displayValue = result.toString();
        result = null;
    }
    operator = op;
    displayValue += ` ${operator} `;
    updateDisplay();
}

function appendDot() {
    if (displayValue.includes('.')) return;
    displayValue += '.';
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    result = null;
    operator = '';
    updateDisplay();
}

function deleteLast() {
    if (displayValue.endsWith(' ')) {
        displayValue = displayValue.slice(0, -3);
    } else {
        displayValue = displayValue.slice(0, -1);
    }
    updateDisplay();
}

function calculateResult() {
    try {
        result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue || '0';
}
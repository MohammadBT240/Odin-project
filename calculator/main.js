function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by 0";
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const decimalButton = document.getElementById("decimal");

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
);

equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
backspaceButton.addEventListener("click", backspace);
decimalButton.addEventListener("click", appendDecimal);

function appendNumber(number) {
  if (display.textContent === "0" || shouldResetDisplay) resetDisplay();
  display.textContent += number;
}

function resetDisplay() {
  display.textContent = "";
  shouldResetDisplay = false;
}

function setOperator(operator) {
  if (currentOperator !== null) evaluate();
  firstNumber = display.textContent;
  currentOperator = operator;
  shouldResetDisplay = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;
  if (currentOperator === "/" && display.textContent === "0") {
    display.textContent = "Error: Division by 0";
    resetCalculator();
    return;
  }
  secondNumber = display.textContent;
  display.textContent = roundResult(
    operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber))
  );
  currentOperator = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function clear() {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
}

function backspace() {
  display.textContent = display.textContent.toString().slice(0, -1);
}

function appendDecimal() {
  if (shouldResetDisplay) resetDisplay();
  if (display.textContent === "") display.textContent = "0";
  if (display.textContent.includes(".")) return;
  display.textContent += ".";
}

function resetCalculator() {
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
}

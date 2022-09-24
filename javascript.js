const DEFAULT_DISPLAYVALUE = "0";
const DEFAULT_ACCUMVALUE = 0;

let displayValue = DEFAULT_DISPLAYVALUE;
let accum = DEFAULT_ACCUMVALUE

const display = document.getElementById("display");
const accumDisplay = document.getElementById("accum");
const plusSign = document.querySelector("#plusSign");
const minusSign = document.querySelector("#minusSign");
const multiplySign = document.querySelector("#multiplySign");
const divideSign = document.querySelector("#divideSign");
const clearEntry = document.querySelector("#clearEntry");


function add (n1, n2){
    return n1 + n2
}

function subtract (n1, n2) {
    return n1 - n2
}

function multiply (n1, n2) {
    return n1 * n2
}

function divide (n1, n2) {
    return n1 / n2
}

function operate (operator, num1, num2) {
    console.log(operator + ":" + num1 + ":" + num2)
    let n1 = Number(num1); let n2 = Number(num2);
    if (operator == "+"){return add(n1, n2)};
    if (operator == "-"){return subtract(n1, n2)};
    if (operator == "x"){return multiply(n1, n2)};
    if (operator == "÷"){return divide(n1, n2)};
}

function toDisplay (input) {
    if (displayValue.includes('.') & input =="."){
        return;
    };
    if  (displayValue === "0" & input == "") {
        displayValue === "0";
    } else if (displayValue === "0" & input == "."){
        displayValue == "";
    } else if (displayValue === "0" & input != "."){
        displayValue = "";
    } else if (displayValue != 0) {
        displayValue == displayValue.toString("");
    };


    displayValue = displayValue.toString() + input.toString();
    display.innerText = (displayValue);
}

function clearDisplay(){
    displayValue = DEFAULT_DISPLAYVALUE;
    accum = 0;
    toDisplay("");
    accumDisplay.innerText = ("")
}

function getDisplayValue() {
   return Number(displayValue);
}

clearEntry.onclick = () => {clearDisplay()};

one.onclick = () => {toDisplay (1)};
two.onclick = () => {toDisplay (2)};
three.onclick = () => {toDisplay (3)};
four.onclick = () => {toDisplay (4)};
five.onclick = () => {toDisplay (5)};
six.onclick = () => {toDisplay (6)};
seven.onclick = () => {toDisplay (7)};
eight.onclick = () => {toDisplay (8)};
nine.onclick = () => {toDisplay (9)};
zero.onclick = () => {toDisplay (0)};
decimalPoint.onclick = () => {toDisplay ('.')};

plusSign.onclick = () => {operatorClick("+");};
minusSign.onclick = () => {operatorClick("-");};
multiplySign.onclick = () => {operatorClick("x");};
divideSign.onclick = () => {operatorClick("÷");};

function operatorClick (operatorClicked) {
    let displayNum = getDisplayValue();
    if (accum === 0) {
        accum = displayNum;
        accumDisplay.innerText = (accum + " " + operatorClicked)
     } else if (accum != 0) {
        accum = operate(operatorClicked, accum, displayNum)
        accumDisplay.innerText = (accum + " " + operatorClicked)
     } 
     displayValue = "0";
     display.innerText = (accum);
}

// for any operator
// ✔ get the current display value as a number 
// ✔ send the number to the accumulator if its the first entry
// display Accum and the operator on the Accumulator HTML


// if there is a number in the accum then operate accum and displayValue
// leave displayValue in Display but clear on next input of any type


window.onload = () =>{
    clearDisplay();
};

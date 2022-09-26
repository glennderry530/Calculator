const DEFAULT_N1 = "";
const DEFAULT_N2 = "";
const DEFAULT_DISPLAYVALUE = "0";
const DEFAULT_CALC_VALUE = 0;
const DEFAULT_OPERATOR = "";
const DEFAULT_EQUALSVALUE= "";

let n1 = DEFAULT_N1
let n2 = DEFAULT_N2;
let displayValue = DEFAULT_DISPLAYVALUE;
let calculatedValue = DEFAULT_CALC_VALUE;
let lastOperator = DEFAULT_OPERATOR;
let equalsValue = DEFAULT_EQUALSVALUE;

const display = document.getElementById("display");
const tally = document.getElementById("tally");
const euqalsSign = document.querySelector("#equalSign");
const plusSign = document.querySelector("#plusSign");
const minusSign = document.querySelector("#minusSign");
const multiplySign = document.querySelector("#multiplySign");
const divideSign = document.querySelector("#divideSign");
const clearEntry = document.querySelector("#clearEntry");


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

equalSign.onclick = () => equals("=");


function add (x, y){
    return (x + y)
}

function subtract (x, y) {
    return (x - y)
}

function multiply (x, y) {
    return (x * y)
}

function divide (x, y) {
    if (y == 0) return "ERROR";
    let num = (x / y);
    num = Math.round((num + Number.EPSILON) * 1000000000) / 1000000000
    return num;
} 

function operate (operator, n1, n2) {
    if (operator == "+"){return add(n1, n2)};
    if (operator == "-"){return subtract(n1, n2)};
    if (operator == "x"){return multiply(n1, n2)};
    if (operator == "÷"){return divide(n1, n2)};
}

function toDisplay (input) {
    if (displayValue.includes('.') && input =="."){ //only 1 decimal point allowed
        return;
    };

    if  (displayValue == "0" & input == 0) {
            return; 
    } else if (displayValue == "0" & input == "."){
        displayValue == "";
    } else if (displayValue == "0" & input != "."){
        displayValue = "";
    } else if (displayValue != "0") {
        displayValue == displayValue.toString("");
    };
    displayValue = displayValue.toString() + input.toString();
    display.innerText = (displayValue);
    console.log (n1 + ":" + n2 + ":" + lastOperator + ":" + displayValue + ":" + calculatedValue)
}

function clearDisplay(){
    n1 = DEFAULT_N1;
    n2 = DEFAULT_N2;
    displayValue = DEFAULT_DISPLAYVALUE;
    calculatedValue = DEFAULT_CALC_VALUE;
    lastOperator = DEFAULT_OPERATOR;
    equalsValue = DEFAULT_EQUALSVALUE;
    display.innerText = ("0");
    tallyDisplay();
    console.log (n1 + ":" + n2 + ":" + lastOperator + ":" + displayValue + ":" + calculatedValue)
}

function getDisplayValue() {
   return Number(displayValue);
}

function tallyDisplay () {
    tally.innerText = (n1 + " " + lastOperator + " " + n2 + " " + equalsValue)
}

function operatorClick (operatorClicked) {
    let displayNum = getDisplayValue();
    if (calculatedValue == 0) {
        calculatedValue = displayNum
        n1 = calculatedValue;
        n2 = "";
        lastOperator = operatorClicked;
        tallyDisplay();
        console.log (n1 + ":" + n2 + ":" + lastOperator + ":" + displayValue + ":" + calculatedValue)
     } else if (calculatedValue != 0) {
        n1 = calculatedValue;
        n2 = displayNum;
        calculatedValue = operate(lastOperator, n1, n2);
        lastOperator = operatorClicked;
        displayValue = calculatedValue;
        display.innerText = (calculatedValue); ///****** check this */
        tallyDisplay();
        console.log (n1 + ":" + n2 + ":" + lastOperator + ":" + displayValue + ":" + calculatedValue)
     } 
     displayValue = "0";
}

//****
function equals (e) {
    if (lastOperator== "") {
        return;
    } else 
    equalsValue = e;
    n2 = displayValue;
    operatorClick(lastOperator);
    tallyDisplay();
    console.log (n1 + ":" + n2 + ":" + lastOperator + ":" + displayValue + ":" + calculatedValue)
    n1 = calculatedValue;
    n2 = "";
    lastOperator = "";
    console.log (n1 + ":" + n2 + ":" + lastOperator + ":" + displayValue + ":" + calculatedValue)
}

window.onload = () =>{
    clearDisplay();
};

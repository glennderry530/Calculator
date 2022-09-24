const DEFAULT_DISPLAYVALUE = "0";
const DEFAULT_ACCUMVALUE = 0;

let displayValue = DEFAULT_DISPLAYVALUE;
let accum = DEFAULT_ACCUMVALUE

const display = document.getElementById("display");
const plusSign = document.querySelector("#plusSign");
const minusSign = document.querySelector("#minusSign");
const multiplySign = document.querySelector("#multiplySign");
const divideSign = document.querySelector("#divideSign");
const clearEntry = document.querySelector("#clearEntry");
const one = document.querySelector("#one");


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

function operate (operator, n1, n2) {
    console.log(operator + ":" + n1 + ":" + n2)
    if (operator == "plusSign"){return add(n1, n2)};
    if (operator == "minusSign"){return subtract(n1, n2)};
    if (operator == "multiplySign"){return multiply(n1, n2)};
    if (operator == "divideSign"){return divide(n1, n2)};
}

console.log(operate("plusSign", 2, 2));
console.log(operate("minusSign", 2, 2));
console.log(operate("multiplySign", 2, 2));
console.log(operate("divideSign", 2, 2));


function toDisplay (input) {
    if (displayValue.includes('.') & input =="."){
        return;
    }; 
    if  (displayValue === "0" & input == "") {
        displayValue === "0";
    } else if (displayValue === "0" & input == "."){
        displayValue === "";
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
    toDisplay("");
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

window.onload = () =>{
    clearDisplay();
};

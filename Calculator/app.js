
//Add
function Add() {
    const getAnswer = document.querySelector("h2 > span");
    let inputValue1 = parseInt(document.querySelector(".input1").value);
    let inputValue2 = parseInt(document.querySelector(".input2").value);
    let sum = parseInt(inputValue1) + parseInt(inputValue2);
    getAnswer.innerHTML = sum;
}

//Subtract 
function Sub() {
    const getAnswer = document.querySelector("h2 > span");
    let inputValue1 = parseInt(document.querySelector(".input1").value);
    let inputValue2 = parseInt(document.querySelector(".input2").value);
    let minus = parseInt(inputValue1) - parseInt(inputValue2);
    getAnswer.innerHTML = minus;
}

//Multiply
function Multiply() {
    const getAnswer = document.querySelector("h2 > span");
    let inputValue1 = parseInt(document.querySelector(".input1").value);
    let inputValue2 = parseInt(document.querySelector(".input2").value);
    let Multiply = parseInt(inputValue1) * parseInt(inputValue2);
    getAnswer.innerHTML = Multiply;
}

//Divide
function Divide() {
    const getAnswer = document.querySelector("h2 > span");
    let inputValue1 = parseInt(document.querySelector(".input1").value);
    let inputValue2 = parseInt(document.querySelector(".input2").value);
    let Divide = parseInt(inputValue1) / parseInt(inputValue2);
    getAnswer.innerHTML = Divide;
}

"use strict";

function showFirstMessage1(){
    console.log("Hello World!");
}

showFirstMessage1();

function showFirstMessage(text){
    console.log(text);
}

showFirstMessage("Hello World!");

function calc(a, b){
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret(){
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//////////////////////////////////////Function expression
const logger = function (){
    console.log("Hello");
};

logger();

///////////////////////Стрелочные функции
const calc1 = (a, b) => a + b;
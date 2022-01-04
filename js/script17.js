"use strict";

const str = "test";
const arr = [1, 2, 4];

console.log(str.length);// Длинна строки (свойство)

console.log(arr.length);

console.log(str[2]); //Доступ к символу строки

console.log(str.toUpperCase()); //Метод преобразует строку в верхний регистр
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));// Метод поиск подстроки
console.log(fruit.indexOf("q"));// -1 возвращает когда данные не найдены

const logg = "Hello world";
console.log(logg.slice(6, 11));// Конец указывается до какого символа не включая последний, надо прибавить +1
console.log(logg.slice(6)); // slice извлекает часть строки, с 6 символа до конца строки
console.log(logg.slice(-5, -1));// знак минус это считается с права на лево

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));
//////////////////////////////методы к числам
const num = 12.2;
console.log(Math.round(num)); //Округление до целого

const test = "12.2px";
console.log(parseInt(test)); //Метод преобразует число в другую систему исчисления, применен к строке
console.log(parseFloat(test));

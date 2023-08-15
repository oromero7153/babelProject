"use strict";

var multiply = function multiply(a, b) {
  return a * b;
};
var firstNum = 2;
var secondNum = 3;
var product = multiply(firstNum, secondNum);
console.log("The product of ".concat(firstNum, " and ").concat(secondNum, " is ").concat(product));
var sum = function sum(a, b) {
  return a + b;
};
var firstAdd = 5;
var secondAdd = 15;
var total = sum(firstAdd, secondAdd);
console.log("The total of ".concat(firstAdd, " and ").concat(secondAdd, " is ").concat(total));
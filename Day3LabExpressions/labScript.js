/*
Blake Geiger
1/10/2015
Day 3 Lab Expressions
 */

// Givens are slices, people and pizza;

var slices = 8;
var people = 17;
var pizzas = 4;

//  8 * 4 equals total

var totalSlices = pizzas * slices;
console.log(totalSlices);

//slices per person

var pizzaPeople = totalSlices / people;
pizzaPeople = pizzaPeople.toFixed(2);
console.log(pizzaPeople + " " + "slices per person.");

// Answer

var answer1 = "Each person ate 1.88 slices of pizza at the party.";
console.log(answer1);




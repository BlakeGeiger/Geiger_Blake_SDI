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

// Sparky gets extra pie;
// Using givens from previous question;
// Gotta use Modulo somewhere

var sparky = 32%17;
sparky = sparky.toFixed(2);
console.log(sparky + " " + "leftover slices.");

// Sparky gets 15 slices

var answer2 = "Sparky gets 15 slices of pizza at the party.";
console.log(answer2);

// This question was unfortunate and frustrating 



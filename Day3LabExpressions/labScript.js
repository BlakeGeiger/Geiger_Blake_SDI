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

// This question was unfortunate and frustrating;

// 5 grocery bills
var bill1 = 122.55;
var bill2 = 139.78;
var bill3 = 128.78;
var bill4 = 136.39;
var bill5 = 121.91;

// Average is all five added then divided by 5;
// Don't forget PEMDAS;

var totalBill = (bill1 + bill2 + bill3 + bill4 + bill5);
console.log(totalBill);

var average = totalBill / 5;
average = average.toFixed(2);
console.log(average);

var answer3 = "You have spent a total of $649.41 on groceries over 5 weeks. That is an average of $129.88 per week";
console.log(answer3);
/*
Blake Geiger
SDI Campus
1/13/2015
Day 4 In Class Assignments
 */

// alert("testing to see if this works");

// Create a basic array
var avengersNames = ["Thor", "Captain America", "Iron Man"];

// Print it out to the console
console.log(avengersNames);

// Print out a specific item
console.log(avengersNames[1]);

// Switch a team member - Iron Man for Spider-Man
avengersNames [2] = "Spider-Man";

console.log(avengersNames);

// Add a team member
avengersNames[3] = "Black Widow";

// Print out roster
console.log(avengersNames);

// Use a variable as an index number
var num = 2;
console.log(avengersNames[num]);

// Length property
// Dot syntax - fancy for use a period
console.log(avengersNames.length);

// Last index number is the length minus one

// Next open space is the length

// Recruit a new team member
avengersNames[avengersNames.length] = "Powerman";
console.log(avengersNames);

// Pick oranges and track how many wwe have

var orangeBins = [12, 20, 14];

// How many bins of oranges did we pick in total
var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log("The total number of orange bins collected is " + total);


// Advanced Array

var fruitBowl = ["Orange", "Tomato", "Strawberry"];

// Property - length - How many items are in the array

console.log(fruitBowl.length + " items in our fruit bowl");

//Method of Arrays

//push - insert an item at the end of the array
//arrayName.push(item to push)

fruitBowl.push("Apple");

//see fruit bowl
console.log(fruitBowl);

//push another fruit
fruitBowl.push("Kiwi");
console.log(fruitBowl);

// pop - takes off the last item in an array AND returns it
// arrayName.pop()
// create a variable to catch the return value
var caught = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught);
var caught2 = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught2);

//splice - used for removing or adding items into an existing array
// arrayName.splice(index # position to start from, # of items to remove, items to put in)
fruitBowl.splice(1, 0, "Banana");
console.log(fruitBowl);

fruitBowl.splice(1, 1, "Kiwi");
console.log(fruitBowl);

// Adding more items
fruitBowl.splice(1, 0, "Tangerine", "Babboa", "Grapes");
console.log(fruitBowl);
/*
 *Blake Geiger
 *1/20/2015
 *Validating Prompts
 */

//alert("Testing to make sure this works");

var userInput = prompt("Please type in your name");

//validating a prompt with a conditional
if (userInput === "") {
    //user did not type anything in
    userInput = prompt("Please do not leave blank, type in your name.");
}

//instead use a while loop
//check the input multiples as many as it takes

var firstName = prompt("Please type in your first name.");

while(firstName === ""){
//the user typed in nothing
//reprompt for the first name
firstName = prompt("Please type in your first name and do not leave blank.");
    
}

//test to see if it is a number
//isNaN() - tests what is inside the parthensisthes. is it not a not number?
//numbers return false, everything else is true

console.log(isNaN("monkey")); //returns true
console.log(isNaN(7)); //returns false

//lets ask the user their age
var age = prompt("please enter your age:");

//validates that the user typed in a number
while(isNaN(age)){
    //this code runs everytime age is not a number
    //reprompt to get a number
    age = prompt("only use numbers please enter your age:");
}

var choice = prompt("please type in yes or no");
choice = choice.toLowerCase;

while (choice === "yes" && choice != "no") {
    //code
    choice = prompt = ("please only type in yes or no")
}
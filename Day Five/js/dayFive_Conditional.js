
 /*
Blake Geiger
SDI Campus
1/15/2015
Conditionals
 */
//alert("Testing to see if this works");

 // Basic conditional statement

 // create a boolean variable to test

var oldEnough = true;

 //if the child is old enough then print to the console, you can ride!

 /*
 Basic structure of if statement

 If(condition to test){
 Code to run if the condition is true
 }

  */

 if(oldEnough){
//Code inside of curly brackets will run if the test is true
  //this code will be skipped if the test is false
  console.log("You can ride the coaster!");
 }

 console.log("What comes after the if statement");

 //Relationship expressions

 //if the kid is over 48 inches tall, then he can ride

var kidHeight = 30;

 //create variable for minimum height
 var minHeight = 48;

 if(kidHeight > minHeight){
console.log("You are tall enough to ride!");
 } else{
  //this code will run if the test if false
  console.log("Sorry, you are too short!");
 }

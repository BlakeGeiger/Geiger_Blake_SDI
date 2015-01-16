
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
 Basic structure of if, else statement

 If(condition to test){
 Code to run if the condition is true
 } else{
 code to run if the condition is false
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

var kidHeight = 47;

 //create variable for minimum height
 var minHeight = 48;

 //create a variable for shoe lift
 var shoeLift = 2;
 //is the child tall enough with shoe lift?

 if(kidHeight + shoeLift > minHeight){
console.log("You are tall enough to ride!");
 } else{
  //this code will run if the test if false
  console.log("Sorry, you are too short!");
 }


 //what ride can the kid go on based on his height?
 //if the kid is 48+ then space mountain
 //if kid is 40+ then buzz lightyear ride
 //anything shorter they have to go on winnie the pooh

 var childHeight = 50;

 if(childHeight>=48){
  console.log("You can ride all the rides!");
 } else if(childHeight>=40){
  console.log("You can ride all but space mountain!");
 } else{
  console.log("you can only ride winnie the pooh!")
 }

/*
if else. if else statement

if(condition one to test){

code to run if true

}else if(condition two to test){

condition two will only be tested if one is false
code to run if true

}else {

code to run if condition one and two are false
}
 */
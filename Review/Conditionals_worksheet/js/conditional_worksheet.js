
 /*
Blake Geiger
SDI Campus
1/15/2015
Conditional Worksheet
 */
//alert("Testing to see if this works");

 //Last chance for gas!

 //Will the car make it across the desert with the fuel left?
 //create var for mpg, gas in tank (%) and the size of tank (gallons)
 function milesLeft(mpg, gasLeft, sizeTank){
    var milesLeft = mpg*gasLeft*sizeTank;
    return milesLeft;
 }
 
 var mpg = prompt("How many miles to the gallon does your vehicle get?");
 var gasLeft = prompt("Choosing a number between 1 and 0, 1 being the fullest, and 0 being empty, how full is your gas tank?");
 var sizeTank = prompt("How many gallons is your gas tank?");
 var distance = 200;
 while(mpg ==="" || isNaN(mpg)){
    console.log("Please do not leave blank, and only enter numbers.")
 }
 while(gasLeft ==="" || isNaN(gasLeft)){
    console.log("Please do not leave blank, and only enter numbers.")
 }
 while(sizeTank ==="" || isNaN(sizeTank)){
    console.log("Please do not leave blank, and only enter numbers.")
 }
 
var totalMiles = milesLeft(mpg, gasLeft, sizeTank);
console.log(totalMiles+ " miles until empty.");
 //if/else statements
 if(totalMiles > distance){
  console.log("Yes, you can make it without stopping for gas!");
 }else{
  console.log("You only have " +totalMiles+ " gallons of gas in your tank, better get gas now while you can!");
 }

 //Check the login

 //username and password must be correct to login in
 // use logic operators

 var usernameEntered = "Dr. Steve Brule";
 var passwordEntered = "dingus";
 var usernameReal = "Dr. Steve Brule";
 var passwordReal = "dingus";

 //if/else if/else statements

 if(usernameEntered == usernameReal && passwordEntered == passwordReal){
  console.log("Welcome, Dr. Steve Brule!");
 }else if(usernameEntered != usernameReal){
console.log("User not found. Try again.");
 }else{(usernameEntered == usernameReal && passwordEntered != passwordReal)
  console.log("Password does not match our records.");
 }

 //movie ticket price

 //variables for age and time
 //to get discount user must be 10< || <55 || be there between 3pm-5pm

 var age = prompt("How old are you?");
 while(age ==="" || isNaN(age)){
    console.log("Please do not leave blank, and only enter numbers.")
 }
 var time = ("What time is it?");
  while(time ==="" || isNaN(time)){
    console.log("Please do not leave blank, and only enter numbers.")
 }

 //if/else if/ else statements
 if(age<10 || age>55){
console.log("The ticket price is $7.00");
 }else if(age<10 || age>55){
  console.log("The ticket price is $12.00");
 }else if(3<= time >= 5){
  console.log("The ticket price is $7.00");
 }else{
  console.log("The ticket price is $12.00");
 }

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
 var mpg = 40;
 var gasLeft = .50;
 var sizeTank = 12;
 var distance = 200;

 //if/else statements
 if(sizeTank*gasLeft*mpg > distance){
  console.log("Yes, you can make it without stopping for gas!");
 }else{
  console.log("You only have +" +sizeTank*gasLeft*mpg+ "+ gallons of gas in your tank, better get gas now while you can!")
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

 var age = 18;
 var time = 7;

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
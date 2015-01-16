
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
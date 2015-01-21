 /*
Blake Geiger
SDI Campus
1/18/2015
Conditional Assignment
 */
//alert("Testing to see if this works");

 //Go to a concert that you don't know how old you must be to get in
 var userAge = prompt("In order to get into the show we must know your age, how old are you?");
 var feeNot21 = 5;
 var cost = 15;

 //User enters age
 console.log(userAge);
 //User answers whether it is friday or saturday, or neither or the two
 var friOrSat = prompt("Is it Friday or Saturday?");
 friOrSat = friOrSat.toLowerCase();
 var time = prompt("What time is it? The required age is determined by the time");
 //If the user is between 18 and 20 they can come, but pay a fee

 if(friOrSat === "Friday"){
  if((time >= 9) && (userAge < 21 && userAge >= 18)){
   console.log("You can come into the show after paying " +feeNot21+ " and the " +cost+" for a total of 20 please.");
   //If the user is 21 or older they can come in with no additional fee
  } else if((time < 9) && (userAge >= 18)) {
   console.log("You can come into the show! That will be " + "$" + cost + " please.");
  }else if((time >= 9) && (userAge >= 21)){
    console.log("You can come into the show! That will be " + "$"+cost+" please.");
  } else {
   console.log("You cannot come into the show!");
  }

 } else {
  //If the user is between the ages of 15 and 14, they can come, but pay a fee
  if ((time >= 9) && (userAge < 16 && userAge >= 14)) {
   console.log("You can come into the show after paying " + feeNot21 + " and the " + cost + " for a total of 20 please.");
   //If user is 16 or over they can come in with no additional fee
  } else if ((time < 9) && (userAge >= 16)) {
   console.log("You can come into the show! That will be " + "$" + cost + " please.");
  } else if((time >= 9) && (userAge >= 16)){
   console.log("You can come into the show! That will be " + "$"+cost+" please.");
 }else {
   console.log("You cannot come into the show!");
  }
  console.log(friOrSat);
 }




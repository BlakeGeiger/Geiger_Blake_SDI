
 /*
Blake Geiger
SDI Campus
1/15/2015
Ternary
 */
//alert("Testing to see if this works");

 // if your gpa is greater than 2.0 you can graduate

 // (condition to test) ? true code : false code ;

 //normal if else statment
 var gpa = 3.8;

 if(gpa > 2.0){
  console.log("congrats you can graduate");
 }else{
  console.log("sorry but your gpa is too low");
 }

 //ternary way
 (gpa > 2.0) ? console.log("you can graduate"): console.log("sorry but your gpa is too low");

 //what book a kid will read
 var age = 6;
 var book;

 // if the child is under ten they read green eggs and ham
 // otherwise they can read the time machine
 //if child is older than 15 the read twilight

 book = (age < 10) ? "green eggs and ham": "time machine";
 console.log("you should read " + book);

 var book2 = (age<10) ? "green eggs and ham": (age<15) ? "time machine": "twilight";
 console.log("you should read " + book2);
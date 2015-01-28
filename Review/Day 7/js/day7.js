/*
 *Blake Geiger
 *1/20/2015
 *While Loops
 */

//alert("Testing to see if this works!");

//Basic while loop

//The while loop loops through a block of code as long as a condition is true.
/*
var i = 0
while(condition){
    //code that runs while condition is true
    incremental change to the counting variable -
    OR infinite loop
}
*/
//initializing counter
var counter = 0;
while (counter < 20){
    //code that will run as long as counter <20
 console.log(counter + " Some things just never end.");

//change for the counter variable 
counter++;
}

//Do while loop
//the code will run at lease once before checking the condition

var i = 0;
do{
    //this code will run before the condition is checked
    //it will also run as long as the condition is true
    console.log("The number is "+i);
    i++;
}while (i<10);
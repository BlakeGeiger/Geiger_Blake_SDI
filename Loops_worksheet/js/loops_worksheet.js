/*
 *Blake Geiger
 *1/20/2015
 *Loops Worksheet
 */

//alert("Testing to make sure this works");

//while loop

var states = prompt("How many states are in America?");
while (states == 50){ 
    //type in error message in case its wrong
    states = prompt("That was incorrect, try again");
}
//make sure the user typed in a number
while(isNaN(states)){
    states = prompt("only use numbers please enter your answer:");
    console.log(states);
}


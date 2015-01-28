/*
 *Blake Geiger
 *1/24/2015
 *Random Numbers
 */

//alert("testing");

//create variables for min and max valude
var min = prompt("Please enter a min value");

//validate our min prompt
while(isNaN(min) || min===""){
    //reprompt for correct
    min = prompt("Please do not leave blank and only use numbers. \nWhat is the min value:");
}
var max = prompt("Please enter a max value");
//validate our max prompt
while(isNaN(max) || max==="" || max<=min){
       min = prompt("Please do not leave blank and only use numbers. \nWhat is the max value:");
}

//create function
function randomizer(mn,mx){
    
    //generate our random number
    var randomNum = Math.round(Math.random()*(mx-mn))+Number(mn);
    //return the random number to our maiun code

    return randomNum;
    
}

//function call BUT create a variable to catch the return value
var ranNum = randomizer(min, max);
console.log("Your random number between " +min+ " and " +max+ " is " +ranNum);

//15 random numbers between our min and max
//create for loop
for(var i=0; i<15;i++){
    console.log(randomizer(min,max));
}


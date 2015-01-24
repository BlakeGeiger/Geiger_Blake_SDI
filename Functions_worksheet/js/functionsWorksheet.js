/*
 *Blake Geiger
 *1/22/2015
 *Functions Worksheet
 */

//alert("testing");

//create a function to calc the circumference of a circle
//circumference = 2*pi*r

function circleCir(r){
    var cir = Math.PI*2*r;
    //return this circumference
    return cir;
    
}

//prompt user for rad
var rad = prompt("Please type in a radius");

//validate 
while(isNaN(rad) || rad===""){
    rad = prompt("Please only use numbers. \nType in a radius");
}

//parse
rad = parseInt(rad);

//outcome
var userResults = circleCir(rad);
console.log("The circumference of the circle with a radius of " +rad+ " is " +userResults.toFixed(2));


function beeDeath(s,w){
    var death = s*w
    console.log("The amount of bee stings to kill an animal weighing 122 is " +s*w);
}

beeDeath(122, 8.666666667);




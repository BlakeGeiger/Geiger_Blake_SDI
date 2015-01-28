/*
 *Blake Geiger
 *1/22/2015
 *Returns
 */

//alert("testing");

//create a function calculating the area of a rectangle
function calcArea(w,h){
    //calc area
    var area = w*h;
    //console.log(area);
    //return the area value to the main code
    //does not return the variable itself 
    return area
}

//function call

//create a variable that will catch the return value

var returnedArea = calcArea(77,9);

console.log(returnedArea);


//create a function to calc the area of a circle
//area = pi r*r

function circleArea(r){
    var area = Math.PI*r*r;
    //return this area
    return area;
    
}

//function call
var results= circleArea(6);
console.log("The area of the circle is "+results);

//have two circles with same radius. what is the total area?
var twoArea = results * 2;
console.log(twoArea.toFixed(2));


//prompt user for rad
var userRad = prompt("Please type in a radius");

//validate prompts
while(isNaN(userRad) || userRad===""){
    userRad = prompt("Please only use numbers. \nType in a radius");
}

///parse the variable
userRad = parseInt(userRad);


//create a var to catch the results
var userResults = circleArea(userRad);
console.log("The area of the circle with a radius of " +userRad+ " is " +userResults.toFixed(2));






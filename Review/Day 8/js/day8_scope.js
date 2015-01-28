/*
 *Blake Geiger
 *1/22/2015
 *Scope
 */

//alert("testing");

//variable scope
//variables inside and outside of a functions

//try not to use the same var names
//however in large files this is going to be impossible

//variables create inside of functions can only be seen inside of those functions

//create a variable for weidth in our main code
var width = 5; //scoped outside the function for main code

//create a function that calculates the perimeter of a rectangle
function calcPeri(){
    var width = 10; //scoped to the function calcPeri
    console.log("inside of the function the value of width is "+width);
    
    var heigth = 20;
     var perimeter = width*2 + heigth*2;
     console.log("Inside of function the perimeter is "+perimeter);
    
}

console.log("Before call "+width);
calcPeri();
console.log("After call "+width);
//will not work
//cannot access a variable declared in function from your main code
//console.log("After call "+perimeter);
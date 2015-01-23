/*
 *Blake Geiger
 *1/22/2015
 *Arguements and Parameters 
 */

//alert("testing");

//arguments - goes in the function call
//parameters - goes in the function definition

//must have the same number of agrs and para usually

//creates a function to calculate the area of a rectangle
function calcArea(w,h){ //parameter go here
    
   // var width = 10;
    //var height = 20;
    //var area = width*height;
    
    var area = w*h;
    console.log("The area is "+area);
    
}

//function call
calcArea(10,20);
calcArea(5,4);

//calculate dog years
//put in human years and get out dog years
function dogYears(h){ //human age parameter
    var dogAge = h *7;
    console.log("Dog age is "+dogAge)
    
}
//function call
dogYears(10);

dogYears(6);

var userAge = prompt("How old are you?");
dogYears(Number(userAge));
/*
 *Blake Geiger
 *1/22/2015
 *Functions
 */

//alert("testing");
//function functionName(){Code to be run}
//function call- "go button" - functionNaem();

//creating a function that logs on to console "hello"

function printHello() {
    console.log("Hey ya dingus, you are inside of the Print Hello Function");
}

//function call to start our printHello function
printHello();

printHello();

//create a function to print more text
function printMore(){
    console.log("Inside of print more. Here is more text.");

}

printMore();

//create a function that calculates tbe area of a rec

function calcArea(){
    //create variables
    var width = 20;
    var height = 30;
    var area = width * height;
    
    console.log("The area is "+area);
}

calcArea();
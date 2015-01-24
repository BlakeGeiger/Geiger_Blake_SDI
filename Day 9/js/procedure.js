/*
 *Blake Geiger
 *1/24/2015
 *Procedure 
 */

//alert("testing");

//this is a basic function
function calcArea(width, height){
    var area = (width*height);
    return area;

}

//function call
//create a avriable to catch the retun results 
var results = calcArea(2,210);
console.log(results);

//this is a procedure
//it does not return a value
//list of steps to do
function calcAreaP(width,height){
    var area=width*height;
    console.log(area);
    //it will not have a return
    
}

//function call for procedure
calcAreaP(6,7);

alert("test"); //procedure
var userInput = prompt("aska a question");//prompting is function
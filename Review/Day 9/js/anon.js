/*
 *Blake Geiger
 *1/24/2015
 *Anon
 */

//alert("testing");

//anonymous functions
//widely used in js and jQuery
//important in object oriented program
//can be used interchangably with normal function if done right

//very quick and easy
//save on memory

/*
 *basic structure of anon function
 *var functionName = function(parameters){
 }
*/

//function call before actual function is defined
var results2 = triArea(6,7);
console.log("Before the function results2 is "+results2);

//create a normal function for area of a triangle
function triArea(b,h){
    var area = .5*b*h;
    return area;
}

//function call
var resultsOne = triArea(5,6);
console.log(resultsOne);
/*
 *THIS DOES NOT WORK!
 *function call has to come after anon function def
//function call before anon
var result4 = triAreaAnon(7,8);
console.log("before "+result4);
*/

//create an anonymous function that calc the area of a triangle
var triAreaAnon = function(b,h){
    var area = .5*b*h;
    return area;
}
//function call after defined anon function
var results3 = triAreaAnon(4,5);
console.log(results3);

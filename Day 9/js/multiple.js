/*
 *Blake Geiger
 *1/24/2015
 *Mulitple
 */

//alert("testing");

//prompt the use for w and h
//calc the area ad perimeter of rec

//first, set up area function
function areaRect(w,h){
    //area of rec is w*h
    var area = w*h;
    return area;
}

//preimeter function
function periRect(w,h) {
    //preimeter is 2*w + 2*h
    var perimeter = 2*w + 2*h;
    return perimeter;
}

//prompt the user to enter w and h
var w = prompt("Please enter the width of you rectangle");
//validate
while(w==="" || isNaN(w)){
    //reprompt
    w=prompt("Please do not leave blank and only use numbers. \nWhat is the width?");
}
var h = prompt("Please enter the height of your rectangle");
//validate
while(h==="" || isNaN(h)){
    //reprompt
    h=prompt("Please do not leave blank and only use numbers. \nWhat is the height?");
}

//function call one at a time
var resultsArea = areaRect(w,h);
console.log(resultsArea);

var resultsPeri = periRect(w,h);
console.log(resultsPeri);

//combined function to calculate the perimeter and the area

function combinedRect(w,h) {
    //calc area
    var area = w*h;
    //calc peri
    var peri = 2*w + 2*h;
    //return both values
    return [area, peri];
}

//function call
var combinedResults = combinedRect(w,h);
console.log(combinedResults);









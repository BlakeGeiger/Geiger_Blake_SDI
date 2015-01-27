/*
 *Blake Geiger
 *1/24/2015
 *Functions Assignment
 */

//alert("testing");

function area(w,h){
    //area of a triangle is .5 * width * height 
    var area = .5*w*h;
    return area;
}

//prompt for width and height
var w = prompt("Please enter the width of you triangle");
//validate nothing
while(w==="" || isNaN(w)){
    //reprompt
    w=prompt("Do not leave blank, enter the width as a number.");
}
//validate whether it's a number or not
var h = prompt("Please enter the height of your tritangle");
//validate nothing
while(h==="" || isNaN(h)){
    h=prompt("Do not leave blank, enter the height as a number.");
}
//validate whether it's a number or not

//call
var totalArea = area(w,h);
console.log("The area of a triangle with a width of "+w+" and a height of "+h+" is " +totalArea+".");

var volumeAnon = function(l,w,h){
     //volume of a rectangle is length * width * height
    var volume = l*w*h;
    return volume;
}

//prompt for length, width and height
var l = prompt("Please enter the length of you rectangle");
//validate nothing
while(l==="" || isNaN(l)){
    //reprompt
    l=prompt("Do not leave blank, enter the length as a number.");
}
//validate whether it's a number or not
var w = prompt("Please enter the width of you rectangle");
//validate nothing
while(w==="" || isNaN(w)){
    //reprompt
    w=prompt("Do not leave blank, enter the width as a number.");
}
//validate whether it's a number or not
var h = prompt("Please enter the height of your rectangle");
//validate nothing
while(h==="" || isNaN(h)){
    h=prompt("Do not leave blank, enter the height as a number.");
}
//validate whether it's a number or not

//call
var totalVol = volumeAnon(l,w,h);
console.log("The volume of a rectangle witha length of "+l+", a width of "+w+", and a height of "+h+" is "+totalVol+".");

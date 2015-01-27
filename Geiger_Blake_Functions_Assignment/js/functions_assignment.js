/*
 *Blake Geiger
 *1/24/2015
 *Functions Assignment
 */

//alert("testing");

function area(w,h){
    //area of a rectangle is width * height 
    var area = w*h;
    return area;
}

//prompt for width and height
var w = prompt("Please enter the width of you rectangle");
//validate nothing
while(w===""){
    //reprompt
    w=prompt("Do not leave blank, enter the width as a number.");
}
//validate whether it's a number or not
var h = prompt("Please enter the height of your rectangle");
//validate nothing
while(h===""){
    h=prompt("Do not leave blank, enter the height as a number.");
}
//validate whether it's a number or not

//call
var totalArea = area(w,h);
console.log(totalArea);

function volume(l,w,h){
     //volume of a rectangle is length * width * height
    var volume = l*w*h;
    return volume;
}

//prompt for length, width and height
var l = prompt("Please enter the length of you rectangle");
//validate nothing
while(l===""){
    //reprompt
    l=prompt("Do not leave blank, enter the length as a number.");
}
//validate whether it's a number or not
var w = prompt("Please enter the width of you rectangle");
//validate nothing
while(w===""){
    //reprompt
    w=prompt("Do not leave blank, enter the width as a number.");
}
//validate whether it's a number or not
var h = prompt("Please enter the height of your rectangle");
//validate nothing
while(h===""){
    h=prompt("Do not leave blank, enter the height as a number.");
}
//validate whether it's a number or not

//call
var totalVol = volume(l,w,h);
console.log(totalVol);

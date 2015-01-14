
 /*
Blake Geiger
SDI Campus
1/13/2015
Expressions Assignment
 */
//alert("Testing to see if this works");

 //Equations in an Array
 var mathNeeded = ["Area", "Perimeter-length", "Perimeter-width", "Perimeter-total"];

 //Ask for the length via prompt
 var length = prompt("Let\'s find out the area and perimeter of a rectangle. What is the length?");
 console.log(length);

 //Ask for the width via prompt
 var width = prompt("What is the width?");
 console.log(width);

 //Area equation from array
 mathNeeded [0] = length * width;
 console.log(mathNeeded[0]);

 //Perimeter length from array
 mathNeeded [1] = (length *= 2);
 console.log(mathNeeded[1]);

 //Perimeter width from array
 mathNeeded [2] = (width *= 2);
 console.log(mathNeeded[2]);

 //Total perimeter from array
 mathNeeded[3] = mathNeeded [1] += mathNeeded[2];
 console.log(mathNeeded[3]);

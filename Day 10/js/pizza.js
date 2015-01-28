/*
 *Blake Geiger
 *1/27/2015
 *Pizza
 */

//alert("testing");

// calculate how much pizza cost per square inch and per slice

//prompt for radius of pizza
//cost of pizza
//and number of slices per pizza

var pizzaRad = prompt("What is the radius of your pizza?");
//validate
while(pizzaRad === "" || isNaN(pizzaRad)){
    //reprompt
    pizzaRad = prompt("Dont leave blank, only enter numbers, what is the pizza radius?");
}

//do while validation
do{
    //prompt
    var pizzaCost = prompt("How much does the pizza cost?");
}while(pizzaCost==="" || isNaN(pizzaCost));

var pizzaSlices = prompt("How many slices are there?");

while(pizzaSlices==="" || isNaN(pizzaSlices)){
    pizzaSlices = prompt("Dont leave blank, only enter numbers, how many slices are there?");
}

//create function
function pizzaArea(r) {
    var area = Math.PI *r*r;
    return area;
}

//create a function that calcs the price per square inch
function pizzaSqInCost(p,a){
    var costPerIn = p/a;
    //round
    costPerIn=costPerIn.toFixed(2);
    return costPerIn;
}

//calc the price per slice
function pricePerSlice(p, s) {
    var costPerSlice = p/s;
    costPerSlice = costPerSlice.toFixed(2);
    return costPerSlice;
}

//function call that starts lord
var results = lordFunction(pizzaRad, pizzaCost, pizzaSlices);
//create a function that will start all the other functions
function lordFunction(r,c,s){
    var area = pizzaArea(r);
    var areaCost = pizzaSqInCost(c,area);
    var slicePrice = pricePerSlice(c,s);
    return [areaCost, slicePrice];
}
console.log(results);





/*
 *Blake Geiger
 *1/29/2015
 *Final Exam WPF
 */

//alert("testing");

//prompt user for cost of an item
var itemCost = prompt("How much does that shirt cost?");

//validate
while(itemCost ==="" || isNaN(itemCost)){
    console.log("Do not not leave blank, and only enter numbers. \nWhat is the cost of the shirt?");
}

//prompt the user for a discount
var discount = prompt("What is discount of the shirt? \nThis number should be between 1 and 100.");

//validate
while(discount==="" || isNaN(discount)){
    console.log("Do not leave blank, and only enter numbers, \nWhat is the discount?");
}

//function
function cost(itemCost,discount){
    var totalDiscount = itemCost*(discount/100);
    var newCost = (itemCost-totalDiscount);
    return newCost;
}

//call
var results = cost(itemCost, discount);
console.log("The final cost of an item that costs $"+itemCost+" with a discount of "+discount+"% is $"+results+".");

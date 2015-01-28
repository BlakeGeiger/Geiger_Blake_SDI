
 /*
Blake Geiger
SDI Campus
1/15/2015
Logical Operators
 */
//alert("Testing to see if this works");

 /*
 true && true = true
 true && false = false
 false && true = false
 false && false = false

 true || true = true
 true || false = true
 false || true = true
 false || false = false

 !(true) = false
 !(false) = true
  */

 // if the price of a 3DS is less than budget lets buy it
 // and if our pay check is over $500

 var budget = 200;
 var dsPrice = 169;
var paycheck = 600;
 if(dsPrice < budget && paycheck > 500){
console.log("Buy the 3DS!");
 } else{
  console.log("Do not buy the 3DS");
 }

 // Lets buy a smart tv if it is less than our budget or we won the lottery

 var tvPrice = 540
 var tvBudget = 500
 var wonLottery = false;

 if(tvPrice < tvBudget || wonLottery){
  console.log("Buy the tv ya dingus");
 }else{
  console.log("stick with your small tv");
 }
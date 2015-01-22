/*
 *Blake Geiger
 *1/20/2015
 *Loops Worksheet
 */

//alert("Testing to make sure this works");

//while loop

var states = prompt("How many states are in America?");
while (states == 50){ 
    //type in error message in case its wrong
    states = ("Great job!");

//make sure the user typed in a number
} while(isNaN(states)){
    states = prompt("only use numbers please enter your answer:");
    console.log(states);
}

//Do while loop
//the code will run at lease once before checking the condition

var favNum = prompt("Type in your favorite number!")
do{
    console.log("The number is "+favNum);
    favNum*=2;
}while (favNum<300);

//make sure the user typed in a number
while(isNaN(favNum)){
    favNum = prompt("only use numbers please enter your answer:");
    console.log(favNum);
}

//for loop

for(var num=1000; num<prompt("Type in a number less than 10"); num--){
    //code to run as long as num <1000
    console.log("The value of num = "+num);
}
//make sure the user typed in a number
while(isNaN(num)){
    num = prompt("only use numbers please enter your answer:");
    console.log(num);
}
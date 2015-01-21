/*
 *Blake Geiger
 *1/20/2015
 *Zombie Attack
 */

//alert("Testing to make sure this works");

//Zombie attack
//There is a zombie at full sail
//It can bit 4 people a day and turn them into zombies
//The CDC wants to know how many zombies there will be in 8 days

var numZombies = 1; //how many zombies do we have
var numBites = 4; //how many bites per zombie per day
var days = 8; //number of days
var daysTakes = 0

for(var i =1; i <=days; i++){
 //how many new zombies get made AND when do they bite people
 //they get bitten and then the next day they can bite
 
 //new zombies made everyday
 var newZombies = numBites * numZombies;
 
 //update the total number of zombies at the end of the day
 numZombies += newZombies;
 
 //report at the end of the day
 console.log("There are " +numZombies+ " zombies at the end of the day #"+i+"!");
}

//how many days would it take to get to a million days

while(numZombies<=1000000){
    //new zombies
    var newZombies = numZombies * numBites;
    
    //how many zombies do we have?
    numZombies += newZombies;
    
    //add 1 to the total number of days it days
    daysTakes++;
}
console.log("It will take " +daysTakes+ " days for a million zombies.");
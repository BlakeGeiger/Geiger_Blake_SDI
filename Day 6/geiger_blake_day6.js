/*
 *Blake Geiger
 *SDI 1501
 *Day Six
 */


//alert("JavaScript works!");

//Is my steak done?

/*
 *120 and under is undercooked
 *120-124 is rare
 *125-129 is medium-rare
 *130-139 is medium
 *140-149 steak is medium well
 *150-165 steak is well done
 *>165 is burnt to a crisp
 */

var steakTemp = 135;
var steakDone = "done";

if (steakTemp < 120) {
    console.log("The steak is not done yet.");
} else if (steakTemp <= 124) {
    console.log("The steak is rare.");
} else if (steakTemp <= 129) {
    console.log("The steak is medium rare.");
} else if (steakTemp <= 139) {
    console.log("The steak is medium.");
} else if (steakTemp <= 149) {
    console.log("The steak is medium well.");
} else if (steakTemp <=165) {
    console.log("The steal is well done.");
} else { (steakTemp > 165) 
    console.log("The steak is burnt to a crisp");
}

console.log("The steak is " + steakDone + ".");

//get outside temperature
var airTemp = parseInt(prompt("What is the temperature outside?" , "65"));

// crate the var for the water temperature
var waterTemp;

//conditional to see what were doing
if (airTemp >= 85) {
    console.log("Let's go to the beach!");
    waterTemp = prompt("What's the temperature of the water?" , "75");
    if (waterTemp >= 75) {
        console.log("Let's go in the water!");
    } else{
        console.log("Let's build a sandcastle!");
    }
} else{
    console.log("We're going to the movies");
}

 round (x)
 Normal rounding .5 and up

var num1 = 9.54444;
console.log(num1);
num1 = Math.round(num1);
console.log(num1);

// floor(x)
// returns x, rounded down to the nearest integer/ whole number

var num2 = 6.1;
console.log(num2);
num2 = Math.floor(num2);
console.log(num2);

// ceil(x)
// returns x rounded up to the next integer/whole number

var num3 = 4.8888
console.log(num3);
num3 = Math.ceil(num3);
console.log(num3);

// random(x)
// returns a number between zero and one

var num4 = Math.round(Math.random()*100);
console.log(num4);

// random number between two numbers
// math.random() * (max-min) + min

var num5 = Math.round(Math.random() * (80-50) + 50);
console.log(num5);

var arrOfItems = ["Chips Ahoy", "Oreos", "El Fudge", "Thin Mints"]
var randomCookie = Math.floor(Math.random()* (arrOfItems.length))
console.log("My current favorite is " + arrOfItems[randomCookie]);

console.log(Math.PI);
console.log(Math.SQRT2);



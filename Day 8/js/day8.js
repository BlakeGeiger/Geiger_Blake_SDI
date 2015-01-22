/*
 *Blake Geiger
 *1/22/2015
 *Day 8
 */

//alert("testing)");

//User leaves it blank?
//returns an empty text string ""
var movie = prompt("What is your favorite movie?");

while(movie === ""){
    //Then the user left the prompt blank
    //reprompt the user
    movie=prompt("Please dont leave this blank, what is your favorite movie?");
}

//test to see if the user typed in a number or not
//isNaN() - is not a number
// text is true
// number is false
var ticketPrice=prompt("How much is a movie ticket?");

while(isNaN(ticketPrice)){
    //user did not right in a number
    //reprompt for a number
    ticketPrice=prompt("please enter a number");
}

//use both validations in the same while loop

var age = prompt("To get into R rated movies we must know your age. How onld are you?");

//validate that the prompt is not blank and is a number

while(isNaN(age) || age === ""){
    //the user type in a text string or nothing
    console.log("Inside of while loop");
    
    //test to see what went wrong
    if (isNaN(age)) {
        age=prompt("Please only use numbers! How old are you?")
    }else{
        age=prompt("Enter a number, ya dingus");
    }
 
    
}

//valiate something specific

var movieGenre = prompt("do you want to see an action movie or a comedy?");

//validates that the user tyoed in one of the two genres

//change to lowercase
movieGenre = movieGenre.toLowerCase();

while (movieGenre != "Action" && movieGenre != "Comedy") {
    movieGenre=prompt("Only type in comedy or action, what genre do you want to watch?")
}

/*
 *Blake Geiger
 *1/20/2015
 *For Loops
 */

//alert("Testing to see if this works!");

//basic for loop structutre
/*
for(initialization; condition to test; incrememnt of change){
    //code to run as long as the condition is true
}
*/

for(var i=0; i<20; i+=4){
    //code to run as long as i <20
    console.log("The value of i = "+i);
}

for(var k=0; k<5; k++){
    console.log("The value of k is "+k);
    //add a break point
    //if k is equal to 3 then stop the code
    if (k===3) {
        break;
    }
}


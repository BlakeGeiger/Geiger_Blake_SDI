/*
 *Blake Geiger
 *1/20/2015
 *Beer
 */

//alert("testing to make sure this works");

// 99 bottles of beer on the wall

for(var i =99; i>0; i--){
    
    
    //add a check for the last round of beers
    if (i===1) {
        console.log(i+ " bottle of beer on the wall, " +i+ " bottle of beer, you take one down, and pass it around, no more bottles of beer on the wall. \nThe End!");
    } else{
        console.log(i+ " bottles of beer on the wall, " +i+ " bottles of beer, you take one down, and pass it around, " +(i-1)+ " bottles of beer on the wall");
    }
}


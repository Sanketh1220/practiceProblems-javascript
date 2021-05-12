/********************************************************************
 * Purpose - This code is wrriten to get grasp on java-script concepts
 * 
 * @author Sanketh Chigurupalli
 * @since 11-05-2021
 *******************************************************************/

//Generated 5 random three digit values
let ran1 = Math.floor(Math.random() * (1000 - 100 + 1))+100;
let ran2 = Math.floor(Math.random() * (1000 - 100 + 1))+100;
let ran3 = Math.floor(Math.random() * (1000 - 100 + 1))+100;
let ran4 = Math.floor(Math.random() * (1000 - 100 + 1))+100;
let ran5 = Math.floor(Math.random() * (1000 - 100 + 1))+100;

//Logged values to console
console.log ("Random Number 1: " + ran1);
console.log ("Random Number 2: " + ran2);
console.log ("Random Number 3: " + ran3);
console.log ("Random Number 4: " + ran4);
console.log ("Random Number 5: " + ran5);

let min = 0;
let max = 0;

//If-else statements to find min and max
if (ran1 > ran2){
    max = ran1;
    min = ran2;
} else {
    max = ran2;
    min = ran1;
}

if (ran3 > max ){
    max = ran3;
} else if (ran3 < min) {
    min = ran3;
} 

if (ran4 > max ){
    max = ran4;
} else if (ran4 < min) {
    min = ran4;
} 

if (ran5 > max ){
    max = ran5;
} else if (ran3 < min) {
    min = ran5;
} 

//Logging Max and Min values
console.log("Maximum Value among 5 random numbers: " + max);
console.log( "Minimum Value among 5 random numbers: " + min)

/********************************************************************
 * Purpose - This code is wrriten to get grasp on java-script concepts
 * 
 * @author Sanketh Chigurupalli
 * @since 11-05-2021
 *******************************************************************/

//Generated random number(0,1)
let random = Math.floor(Math.random()*10) % 2;

//if-else to state heads ot tails
if(random == 1) {
    console.log("Its Heads!")
}else {
    console.log("Its Tails!")
}
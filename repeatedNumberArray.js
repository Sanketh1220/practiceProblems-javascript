/********************************************************************
 * Purpose - This code is wrriten to show sum of numbers in array are Zero or Not
 * 
 * @author Sanketh Chigurupalli
 * @since 13-05-2021
 *******************************************************************/

//Taking input from user
const readl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
//Reading inputs of user
readl.question("Enter range of numbers (give space after entering each number): ", (number) => {
    
    //Spliting the input by space(" ") to give to an array
    let numberArray = number.split(" ");

    console.log(numberArray);

    let a = parseInt(numberArray[0]);

    let b = parseInt(numberArray[1]);

    console.log("Enter minimum number of your range : " + a);

    console.log("Enter minimum number of your range : " + b);

    //Created a new Array
    let repeatedNumInRange = new Array();

    let counter = 0;

    //Checking for divisibility with 11
    while (a > 0 && a < b) {
        let check = ( a % 11 );
            if (check == 0) {
                repeatedNumInRange[counter++] = a;
                (a++);
            } else {
                (a++);
            }
    }
        
    console.log("[" + repeatedNumInRange + "]");

    readl.close();
});
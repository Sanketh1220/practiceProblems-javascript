/********************************************************************
 * Purpose - This code is wrriten to get second minimum 
 * and second maximum of random numbers array
 * 
 * @author Sanketh Chigurupalli
 * @since 11-05-2021
 *******************************************************************/

//Declared Array
let randomNumArr = new Array();

//Intialised Counter
let counter = 0;

//Running through loop to add multiple random numbers to array
for (let c = 1; c<=10; c++) {
	let ran = Math.floor(Math.random() * (1000 - 100 + 1))+100;
	randomNumArr.push(ran);
}

//Printing array
console.log("Array is [" + randomNumArr + "]");

let max = 0;
let min = 1000;
let secMax;
let secMin;

//Loop for finding second minimum and second maximum
for(let count = 0; count < 10; count++ ){
	if (randomNumArr[count] > max){
		secMax = max;
		max = randomNumArr[count];
    } else if (randomNumArr[count] < min ){
		secMin = min;
		min = randomNumArr[count];
    }
}

//Printing all numbers
console.log("Largest Number: " + max);
console.log("Second Largest Number: " + secMax);
console.log("Smallest Number: " + min);
console.log("Second Smallest Number: " + secMin);
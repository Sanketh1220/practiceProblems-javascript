//creates array
let dogBreeds = ["Pomeranian", "German Shepherd", "Lab", "Husky"];
let carBrands = new Array ("Ferrari", "Bugati", "Lexus", "Porche", "Range Rover", "Rolls Royce");
let bikeBrands = new Array ("Hero", "Honda", "Yamaha", "KTM", "Suzuki");

//slicing to get German Shepherd  removed element and after index element - 2
let slicedDogs = dogBreeds.slice(1,3);

//copying array of carBrands
let copyCarBrands = [...carBrands];

//removing nothing from array
let dogs = dogBreeds.slice(2);

// pushing element into an array 
let pushCar = carBrands.push("Audi");

//removing the element LIFO manner
let popBike = bikeBrands.pop();

//adding a array start
let addFirst = dogBreeds.unshift("Pug");

//remove from first
let shiftCar = carBrands.shift();

// lets to add two strings toyota and volks vagen after index of 2 and removes first element if an array
//(2 (------> Indicates after which index to add), 1 (------> How many elements to remove from where))
carBrands.splice(2, 1, "Toyota", "Volks Vagen");

// adds both the arrays
let animals = dogs.concat(carBrands, bikeBrands);


let newAnimals = [...dogs, ...carBrands, ...bikeBrands].toString;
console.log(newAnimals);

let sortDog = dogs.slice(0).sort();

function scanArray([first, second]) {
    console.log("Scan: " + first + " " + second); 
}

scanArray(animals);

//joining all together
let joinAnimals = animals.join(" ");
let allAnimals = "";
for (let animal of allAnimals) allAnimals += animal + " ";

console.log("Animals: " + allAnimals);
/*
Spread operator - Exapanding  array into all its eleements 
*/
// === Importing print functions from funz.js ===
import { mainHead, subHead, paraText } from "./funz.js";
import restaurantP from "./rest.js";

// Write header

mainHead(`
106: Spread operator
- Expand an array into all its elements unpaccking
`);
paraText(`
Since ES6 this spread operator is for unpacking arrays
`);

subHead("Simple examples");
const arr = [7, 7, 8];

// Old method of adding alements
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.table(badNewArr);

/* 
ES6 method for unpacking is using the spread operator 
*/
paraText("Printing the new array with spead operator : ");
const newArr2 = ["a", "b", ...arr];
console.log(newArr2);
console.table(newArr2);

// new array

const newMeny = [...restaurantP.mainMenuP, "Smegma"];
console.log(newMeny);

// Array copy

// Shallow copying
const mainMenuCopy = [...restaurantP.mainMenuP];

// Joining Arrays
paraText("Make new array joinng elements from one array");
const menu2 = [...restaurantP.starterMenuP, ...restaurantP.mainMenuP];
console.log(menu2);
console.table(menu2);

// Iterables Testing
subHead("Testing iterables");
const str = "jina";

// Syntax used for making an array of characters from strings
const jinaLetters = [...str, "", "F."];
console.log(jinaLetters);

// Real world example , using spread operator below

// const ingredientsP = [
//   prompt(`Let\'s make Pasta! - Ingredient 1`),
//   prompt("Ingredient 2"),
//   prompt("Ingredient 3"),
// ];

// console.log(ingredientsP);

// restaurantP.orderPasta(...ingredientsP);

//objects
paraText("Using spread operator to add new elements to existing object");
const newRestP = { ...restaurantP, founder: "doinga", year: "2020" };
console.table(newRestP);
console.log(newRestP);

// Nice copy method
const restaurantPCopy = { ...restaurantP };
restaurantPCopy.name = "Pinty Sniff";
console.log(restaurantP.nameP);
console.log(restaurantPCopy.name);

// Rest Pattern
subHead("Rest Pattern");
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Rest operator for building a menu

const [puzza, , rodo, ...othersp] = [
  ...restaurantP.mainMenuP,
  ...restaurantP.starterMenuP,
];
console.log(puzza, rodo, othersp);

// Rest pattern for objects
paraText("Also works in objects, since you were thinking abou tthis ");

// Sybtax is same for objects
const { sat, ...weekdays } = restaurantP.openingHoursP;
console.log(weekdays);

// Example function for rest
paraText("Using spread operators in a function");
const addP = function (...numbersP) {
  let sum = 0;
  for (let i = 0; i < numbersP.length; i++) sum += numbersP[i];
  console.log(sum);
};

// Any arbitraty amount without putting in many argument
addP(2, 3);
addP(5, 3, 7, 2);

// Using spread operator in teh function
const xP = [23, 5, 7];
addP(...xP);

// edge cases
restaurantP.orderPizza("mushrooms", "onion", "olives");
restaurantP.orderPizza("mushrooms");

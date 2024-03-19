/*
115: Looping Objects: Object Keys , Values and Entries
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
import { restaurantP2 as re, weekdays as we } from "./rest.js";
//===
mainHead("115: Looping Objects: Object Keys , Values and Entries");

//copy restaurant object
paraText("Make new resturant object copy and print");
const re2 = { ...re };
console.log(re2);

// DC re for hours

paraText("DC hours int own var");
const propsH = re2.HoursP;
console.log(propsH);

// Propertis names
paraText("Printing the hoursP object");
const props = Object.keys(propsH);
console.log(propsH);

// Properties Values
paraText("Printing values of properties");
const val = Object.values(propsH);
console.log(val);

// Printing the number of properties
paraText("Cool method of buildign strings");
let OpenStr = `Opening = ${props.length} days: `;
for (const day of props) {
  OpenStr += `${day} , `;
}
console.log(OpenStr);

paraText("Looping over the HoursP");
for (const day of props) {
  console.log(day);
}

// For looping we need entries
// Looping entire object
paraText("Using enteries");
const entries = Object.entries(propsH);
console.log(entries);

paraText("Looping over entries in L47");
// Immediate DC in const here
for (const [k, { open, close }] of entries) {
  console.log(`On ${k} we open at ${open} and close at ${close}`);
}

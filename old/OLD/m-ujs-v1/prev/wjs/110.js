/*
110: Logical Assignment operators LAO
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
import restaurantP from "./rest.js";
// ===

mainHead("110: Logical Assigment Operators - LAO");

// Create new objects

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "Bodiza",
  numGuests: "",
  owner: "Min To",
};

// Set default objects to

// rest2.numGuests = rest2.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
console.log(rest1);
console.log(rest2);

//LAO - Or Operators
// rest2.numGuests = rest2.numGuests || 10 - This one made more concise;
// Assigns a variable if value appears to be falsey
// rest1.numGuests ||= 50;
// rest2.numGuests ||= 50;

// NCO assignment operator
rest1.numGuests ??= 50;
rest2.numGuests ??= 50;

console.log(rest1.numGuests);
console.log(rest2.numGuests);

// LAO operators
// rest2.owner = rest2.owner && "<anon>";
rest2.owner &&= "<buty>";
console.log(rest2.owner);

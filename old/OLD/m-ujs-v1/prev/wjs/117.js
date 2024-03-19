/*
117: Sets
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
//===

mainHead("117: Sets");
subHead("Set is a collection of unique values");

// Creation of set
subHead("Make a set");

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Rissotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);
console.table(orderSet);
console.log(`
Typoef set = ${typeof orderSet}
`);

paraText("Passing a String will break it");
console.log(new Set("Gina"));

// Getting a size of the set
paraText("Size of set");
console.log(orderSet.size);

// Check if a element is true
paraText("Check an element in set");
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

// Quick test of the includes keyword to see if element exists
paraText("Testing ArrayS");
const ar1 = [1, 2, 3, 4, 5];
console.log(ar1.includes(1));

subHead("Adding Element to a set");
orderSet.add("GarlicBread");
orderSet.add("GarlicBread");
console.log(orderSet);

subHead("Remove Element from a set");
orderSet.delete("GarlicBread");
console.log(orderSet);

// Retrieve elements for a set
subHead("Extract from set");

// Remove all elements
const orderSet2 = orderSet;
console.log(orderSet2);
subHead("Remove Elements froms a set");
// Note when removing elements from a set , if method not called then it wont be deeted
orderSet2.clear();
console.log(orderSet2);

subHead("Looping over a set");
const orderSet3 = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Rissotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet3);
for (const ord of orderSet3) console.log(ord);

// Use Case - Removing duplicated
const restStuff = ["Waiter", "Sheph", "Waiter", "Sheph", "Manager"];

// Set conversion
const restStuffUnique = [...new Set(restStuff)];

// Conversion using spread operator
const restStuffUnique2 = [...restStuffUnique];
console.log(restStuffUnique2);
console.log(restStuffUnique);

// Getting the size without creating an array
console.log(new Set(["Waiter", "Sheph", "Waiter", "Sheph", "Manager"]).size);

// Getting Size
console.log(new Set("Jina").size);

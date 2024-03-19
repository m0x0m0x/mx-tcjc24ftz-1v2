/*
118: Maps
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
//===
mainHead("118: Maps");

subHead("Making and testing maps");

const rest = new Map();
rest.set("name", "clasic");
rest.set(1, "Firenz");
rest.set(2, "Lisb");
console.log(rest);

// Trying to set multipl at the same time
// You can set one property at a time it looks like
const rest2 = new Map();
rest2.set(["Type", "Jam", "2", "fam"]);
console.log(rest2);

// Chaingn set methods
rest
  .set("Categories", ["Sca", "Arm", "Far"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we r open")
  .set(false, "closed");

console.log(rest);

//retrieving data by keys
subHead("Retrieve Items");
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(false));

paraText("Doing logic in maps");
const time = 21;

// Here defining it into a var
const ans1 = rest.get(time > rest.get("open") && time < rest.get("close"));
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(ans1);

// See if something contains ley
subHead("Checking if keys exist");
console.log(rest.has("Categories"));

subHead("Deleting Keys");
// Delete the keys
rest.delete(2);
console.log(rest);
// rest.clear()
console.log(rest.size);

subHead("Using Different Keys");
// using array as keys
const arr1 = [1, 2];
rest.set(arr1, "Ar1");
console.log(rest);

// Since it isnt the same object in the heap
// Note retrievign the keys only here
console.log(rest.get(arr1));

// Selecting page element
rest.set(document.querySelector("h2"), "Heading2");
console.log(rest);

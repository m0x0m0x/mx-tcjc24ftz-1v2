/*
119: Maps Iteration // Check
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
import { restaurantP2 as re, weekdays as we } from "./rest.js";
//===
mainHead("119: Maps Iteratio");

subHead("Populating he maps");
const queS = new Map([
  ["question", "WhatIsProgLangInWorld"],
  [1, "C"],
  [2, "Java"],
  [3, "JS"],
  ["correct", 3],
  [true, "💋Lick"],
  [false, "🤬Fukr"],
]);

console.log(queS);
console.log(queS.get("question"));

subHead("Converting Maps to Objects");
const hoursMap = new Map(Object.entries(re.HoursP));
console.log(hoursMap);
console.log(re.HoursP);

subHead("Iterable");
console.log(queS.get("question"));
for (const [k, v] of queS) {
  if (typeof k === "number") console.log(`Answer ${k}: ${v}`);
}
subHead("Getting input from user and compare against boolean keys");
const ans1 = Number(3);
console.log(ans1);
console.log(queS.get(queS.get("correct") === ans1));

subHead("Convert p to an array ");
console.log([...queS]);
console.log(...queS.entries());
console.log(...queS.keys());
console.log(...queS.values());

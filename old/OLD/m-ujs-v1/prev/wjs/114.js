/*
114: Optional Chaining for objects - OC
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
import { restaurantP2 as re, weekdays as we } from "./rest.js";
//===

mainHead("114: Optional Chaining for objects");

paraText("Printing the restaurant");
const re2 = { ...re };
console.log(re2);

// This is the traditional way
paraText("Definign the issue");
if (re2.HoursP && re2.HoursP.sa) console.log(re2.HoursP.sa.open);
if (re2.HoursP.fr) console.log(re2.HoursP.fr.open);

paraText("OC Tests Here");
// with OC
console.log(re2.HoursP.sa?.open);
// The operation after the ? will happen only if the elements before it exists
console.log(re2.HoursP?.sa?.open);

// Using the weekdays
paraText("Printing day and times with OC");
for (const day of we) {
  //   console.log(day);
  const open = re2.HoursP[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// OC working on methods ot see if it exists
subHead("OC works on methods");
console.log(re2.order?.(0, 1) ?? "No Method");
console.log(re2.orderRi?.(0, 1) ?? "No Method");

//OC works on arrays also
subHead("OC on arrays");
const users = [{ name: "ina" }, { email: "liqo@hojo.io" }];
// console.log(users);
console.log(users[0]?.name ?? "User Array Empty ");

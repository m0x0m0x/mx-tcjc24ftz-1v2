/*
109: The Nullish Coalescing Operator - NCO
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
import restaurantP from "./rest.js";
// ===

mainHead(`109: The Nullish Coalescing Operator - NCO`);

// Make a new restaurant object

const restaurantP3 = { ...restaurantP };
console.log(restaurantP3);

restaurantP3.clz = 100;
const cl2 = restaurantP3.clz || 99;
console.log(cl2);

// how touse nco - works with nullisj values
const clz2 = restaurantP3.clz ?? 10;
console.log(clz2);

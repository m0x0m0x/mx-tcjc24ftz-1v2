/*
108: Short Circuiting (&& and || ) 
*/

// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
import restaurantP from "./rest.js";
// ===

mainHead(`
108: Short Circuiting ( SC ) with && and ||
`);

subHead("Or Operator");
paraText(`
Look at the code , you can see which ones are 'truthy' or 'falsey'
`);
// Use any data type, return any data type, short-circuiting - Short circuit evaluation
console.log(3 || "nina");
console.log("" || "nina");
console.log(true || 0);
console.log(undefined || null);

// This is an example of the first word encountered , to be a truthy value
console.log(undefined || 0 || "" || "cussy" || 23 || null);

// Copying restaurantP object in new copy
paraText("Made copy of restaurantP object");
const restaurantP2 = { ...restaurantP };
console.log(restaurantP);
console.log(restaurantP2);

// Check number of guests
paraText("Adding clientz1 to restaurantP");
restaurantP2.clientz1 = 0;
const clientz1 = restaurantP2.numGuest ? restaurantP2.clientz1 : 10;
console.log(clientz1);
console.log(restaurantP2);

// Using SC
const clientz2 = restaurantP2.clientz1 || 99;
console.log(clientz2);

// --- And Operator ---
// Works opposite of the || operator
// SC when first value is falsey

subHead("--- And Operator SC ---");

console.log(`

|| operator SC Truthy Values
|| (3 || 'ina') = ${3 || "ina"}

&& SC Falsey VAlues 
&& (3 && 'ina') = ${3 && "ina"}
`);

// Geenrealization
//SC also means it will skip the value
console.log("hello" && 23 && null && "jonas");

// This can be changes using SC technique
if (restaurantP.orderPizza) {
  restaurantP2.orderPizza("gun", "bat");
}

// Using && - Similar to the if block above
restaurantP2.orderPizza && restaurantP2.orderPizza("ji");

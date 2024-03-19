/* 
112: Looping Arrays: The For-of Loop
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "./funz.js";
import { restaurantP } from "./rest.js";
//===
mainHead("112: Looping Arrays: The For-of Loop");

// Loop over an array
const restaurantP2 = { ...restaurantP };
console.log(restaurantP2);

const menu = [...restaurantP2.starterMenuP, ...restaurantP2.mainMenuP];

paraText("Traditional Method with for loop printing");
// Traditional method of printing
for (let i = 0; i < menu.length; i++) console.log(menu[i]);

paraText("New Method");
// New loop for array
for (const item of menu) console.log(item);

// Getting index is difficult
paraText("Printing the index also in a nice format");
for (const cu of menu.entries()) {
  console.log(`${cu[0] + 1}:${cu[1]}`);
}

// Modern method above
paraText("Modern Method");
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

paraText("Examining the menu.entries iterator");
console.log([...menu.entries()]);

// Just printing the menu variable which is extracted from restaurantP2
console.log(menu);

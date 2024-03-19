/*  
125: Coding Challenge #4
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "../wjs/funz.js";

mainHead("125: Coding Challegne 4");
console.log("hey");

//1 . First Problems
const container = document.querySelector(".text-area"); // Replace with your element's id
const textarea = document.createElement("textarea");
container.appendChild(textarea);

/* 
Strucutre of text that needs to be printed 
underscore_case 
 first_name 
Same_variable
  calculated_AGE
delayed_departure 
*/

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLocaleLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

/// Adding your own key press
// document.addEventListener("keydown", function (b) {
//   const text = document.querySelector("textarea").value;
//   console.log(text);
// });

"use strict";
/* 
132: Functions Accepting Callback Functions
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
// ======
mainHead("132: Functions Accepting Callback Functions");

subHead("Writing Higher Order Function");

// Function that accepts other functions as input , removes spaces
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

// Function that does capitalization
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher Order Function - HOF
const transF = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

paraText("Call upperFirstWord()");
transF("jsjsjsj is the best !", upperFirstWord);

paraText("Call oneWord()");
transF("jsjsjsj is the best !", oneWord);

subHead("Second Attempt");

// This is a simple arrow function
const high5 = (str) => console.log("😔");
high5();

// Callback function
document.body.addEventListener("click", high5);

// Another example
// paraText("For Each Function")

["nina", "bina", "jina"].forEach(high5);

// Simple test 

// Push test comment 
console.log('Push Test')
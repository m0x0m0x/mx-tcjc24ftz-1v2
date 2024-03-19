"use strict";
/* 
133: Functions Returning Functions
- Function that returns another function
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
// ======
mainHead("133: Functions Returning Functions");

subHead("Testin return function");
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet("hey");
greeter("Nina");
greeter("Nbina");

// Writing the above as an arrow function

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet("booty")("queen");

"use strict";
/* 
130: How Passing Arguments Works: Value vs Reference
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
// ======
mainHead("130: How Passing Arguments Works: Value vs Reference");

// Learning about primitives and objects as a base
subHead("Primitives and Objects in terms of Functions");
const flight = "LH234";
const nina = {
  name: "Mistress Nina",
  passP: 6969,
};

const checkIn = function (fltNum, pass) {
  fltNum = "LH999";
  pass.name = "Ms." + pass.name;

  //Checking passport
  // if (pass.passP === 6969) {
  //   alert("CheckIn");
  // } else {
  //   alert("Wrong Pass");
  // }
};
checkIn(flight, nina);
console.log(flight);
console.log(nina);

subHead("Illustrate copying and referencing in objects ");

const newPas = function (person) {
  person.passP = Math.trunc(Math.random() * 123131312321);
  console.log(person.passP);
};

newPas(nina);
checkIn(flight, nina);

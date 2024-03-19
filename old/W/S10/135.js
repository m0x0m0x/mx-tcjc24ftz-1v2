"use strict";
/* 
135: The Bing Method
- Continunation from 134.js , when learning about 
this alternatives , previous was, book.call and book.apply
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";

// Importing functions from 134.js
import { armpitAir, book, butyAir, pantyAir } from "../S10/134.js";
// ======
mainHead("135: The Bind Method");

// Bind doenst call function, return a new function ,
//where this is bound , this is set to whatever passed into bind

subHead("Using Bind Method");
paraText("Calling from 134.js");
console.log(butyAir, pantyAir, armpitAir);

// Here Binding is being done
paraText("Function that is now binding this keyword to what we want");
const book2 = book.bind(pantyAir);
book2(999, "bokda");

// This is tested by you
const book3 = book.bind(butyAir);
book3(919, "kaska");

// Creating booking function to each airlines
// Re createing new functions binding to the previos objects
const bookBA = book.bind(butyAir);
const bookPA = book.bind(pantyAir);
const bookAR = book.bind(armpitAir);

// Even calling furthere

// Using bind to crate function
// here one argument is set , we can just add 1 argument now
// This pattern is called partial application - part of itis already beind defined
const bookBA23 = book.bind(butyAir, 12);
bookBA23("Bonda");
bookBA23("Londi");

// Used often with bind function button
butyAir.planes = 300;
butyAir.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// butyAir.buyPlane();
paraText("Adding function to button");
document
  .querySelector(".btn1")
  .addEventListener("click", butyAir.buyPlane.bind(butyAir));

paraText("Adding a tax ");
// Partial Application
const addTax = (rate, value) => value + (value * rate) / 100;
console.log(addTax(10, 100));

// Using bind to set a value
// This same as - addVAT = value => value + value * 0.23
const addVAT = addTax.bind(null, 23);

console.log(addVAT(20));

//  Function Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(20));

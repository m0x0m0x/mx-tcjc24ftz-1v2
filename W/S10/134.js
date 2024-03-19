"use strict";
/* 
134: The Call and Apply Methods 
- Regarding the "this" keyword 
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
// ======
mainHead("134: The Call and Apply Methods ");

subHead("Testing methods");
export const butyAir = {
  airline: "BuutySniffAir",
  iataCode: "BX",
  bookings: [],
  book(fltNum, passN) {
    console.log(
      `${passN} booked seat on ${this.airline} flight ${this.iataCode}${fltNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${fltNum}`, passN });
  },
};
paraText("Printing object with pushed elemens");
console.log(butyAir);

paraText("Print Object with function");
butyAir.book("69", "Jina");
butyAir.book("69", "Mona");

paraText("Another Object and testing methods");
// This object should have the same properties to used with book.call method
export const pantyAir = {
  airline: "PussyWings",
  iataCode: "PS",
  bookings: [],
};

// Create a new reusable function
export const book = butyAir.book;
console.log(`
Type of object ${typeof book}
`);
// This will not work since this is undefined
// book(23, "ika");

subHead("Using call and apply methods");

// Using the call method
book.call(pantyAir, 99, "gina");
console.log(pantyAir);
book.call(butyAir, 57, "Lona");
console.log(butyAir);

// Creating airlines
export const armpitAir = {
  airline: "sweatyArmpitAir",
  iataCode: "SW",
  bookings: [],
};
book.call(armpitAir, 99, "Bian");
console.log(armpitAir);

subHead("Apply method - book.apply");
paraText("Needs array instead of args like book.call");
// Using apply method - Doesnt recieve arguments will take a list
// Apply is not used anymore , since it needs and array
const flightData = [583, "nina"];
book.apply(pantyAir, flightData);
console.log(pantyAir);

// Bind Method
paraText("Using the call method with the spread operator");
book.call(pantyAir, ...flightData);

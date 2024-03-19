"use strict";
/* 
129: Default Parameters 
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
// ======
mainHead("129: Default Parameters ");

// Starting with making booking function
subHead("Section start - Using Airport Theme");

const bookingS = [];
const creatBooking = function (flightNum, numPass = 1, price = 99 * numPass) {
  const booking = {
    flightNum,
    numPass,
    price,
  };
  console.log(booking);
  console.table(booking);
  bookingS.push(booking);
};

creatBooking("Jiuo", 23, 900);
creatBooking("jimo", 5);
creatBooking("jj", 10);

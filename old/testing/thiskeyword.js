"use strict";
/*
Revision of this keyword which is 
ch98- this Keyword , You came here when going through 134:call and apply methods 
*/
// === import zone
// Note this will bring in all the functions
import { mainHead } from "../utils/text.js";
//
mainHead("This Keyword Test");

// Basic object
const fetishQ = {
  name: "ina",
  fetish: "stink",
  year: "2000",
  calcAge: function () {
    const nowYear = new Date().getFullYear();
    return nowYear - this.year;
  },
};
console.table(fetishQ);
console.log(fetishQ.calcAge());

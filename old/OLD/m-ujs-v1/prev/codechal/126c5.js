/*  
126: String Method Practice 
*/
// === Import Zone ===
import { mainHead, subHead, paraText } from "../wjs/funz.js";
//===
mainHead("126: Final Chapter in Section - String Methods Practice");

// Taken from
//https://github.com/m0x0m0x/m-ujs-v1/blob/main/cursa/09-Data-Structures-Operators/final/script.js#L54C1-L55C189

subHead("API call Data");
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

paraText("Printing out the API data");
console.log(flights);
console.table(flights);
console.log(flights.split("+"));

subHead("Work Section");
console.log(flights.split("+"));

paraText("For loop to break string");

// Simple arrow function to do the extraction
const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flt of flights.split("+")) {
  // First destructure immediate afte split
  const [type, from, to, time] = flt.split(";");

  // Building the string here
  const out1 = `${type.startsWith("_Delayed") ? "🔴" : "✈️"} ${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(
    40,
    " "
  );
  console.log(out1);
}

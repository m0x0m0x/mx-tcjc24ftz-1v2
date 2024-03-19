/*  
Coding Challenge #2
*/
// === Import Zone ===

import { mainHead, subHead, paraText } from "../wjs/funz.js";
import { game as gPusy } from "./game1.js";
// ===

mainHead("Coding Challenge 2");
console.table(gPusy);

/*
 1. Loop Over game scored array and print each player name to the 
 console, along with the goal
 - Referrign to 115.js for notes 
*/
subHead("Q1: Loop Over array");
console.table(gPusy.scored);

paraText("DC array");
//extract array into its own varaiable
const goalS = gPusy.scored;
console.table(goalS);

paraText("Attempt1");
// Loop testing - Working Solution
for (const [n, g] of goalS.entries()) {
  console.log(`Goal ${n}: ${g}`);
}

subHead("2: Loop Calculations");
/* 
2. Use a loop to calculate the average odd and log it to the console
*/
// Extract odds arrat
const oddsP = gPusy.odds;
console.table(oddsP);
console.log(`oddsP type = ${typeof oddsP}`);

// Since oddsP is an object
paraText("Printing out keys and values");
console.log(Object.keys(oddsP));
console.log(Object.values(oddsP));

// DC values
const oddsPvalues = Object.values(oddsP);
console.log(`oddsPvalues typeof = ${typeof oddsPvalues}`);

paraText("Loop Test1");

for (let num of oddsPvalues) {
  let sumP = 0;
  sumP += num;
  console.log(sumP);
}

// // To proceed write a function that can calculate the array
// function averPusy(arr) {
//   let sum = 0;
//   for (const element of arr) {
//     sum += element;
//   }
//   let panty = sum / arr.length;
//   return panty;
// }
// // averPusy(oddsP);

subHead("Given Solutions");

//1 . Write Goal number and player
subHead("Solution 1");
for (const [i, player] of gPusy.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2. Calculate the average from the array
subHead("Solution 2");
const odds = Object.values(gPusy.odds);
let average1 = 0;
for (const odd of odds) average1 += odd;
average1 /= odds.length;
console.log(`
Average of ${odds} is ${average1}
`);

//3. Print the contents of the object to the console
subHead("Solution 3");

for (const [team, odd] of Object.entries(gPusy.odds)) {
  const teamStr = team === "x" ? "draw" : `Victory ${gPusy.team1}`;
  console.log(`
  Odd of ${teamStr} ${odd}
  `);
}

/*  
Coding Challenge #1
*/
// === Import Zone ===

import { mainHead, subHead, paraText } from "../wjs/funz.js";
import { game as gPusy } from "./game1.js";
// ===

mainHead("111 Coding Challenge #1");

subHead("View object");
console.table(gPusy);

//1. Creating 2 players
subHead("1. Creating two player");

const [players1, players2] = gPusy.players;
console.log(players1, players2);
console.log(`
Player 1 = ${players1}
Player 2 = ${players2}
`);

//2 . Create one variable and goal keeper and reminaing array of all other players
subHead(
  "2 . Create one variable and goal keeper and reminaing array of all other players"
);
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3 .One array with all players
subHead("3 .One array with all players");
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
console.table(allPlayers);

// 4. Create new array , player1 + 3 other players
subHead("4. Create new array , player1 + 3 other players");
const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];
console.log(players1Final);

//5. Create variables based on odds object -
// Reqiuires nested DC

subHead("5. Create variables based on odds object");
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, team2, draw);

//6. printGoals Function
subHead("6. Print Goals Function");
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals("Davies", "Muller");
printGoals(...gPusy.scored);

//7. Which team likely to win based on odds variable
subHead("7. Team win based on odds ratio ??");
team1 < team2 && console.log("Team 1 Likely to win");

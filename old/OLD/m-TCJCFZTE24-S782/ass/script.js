"use strict";

//Scores & aplayer
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

//Dices
const diceEl = document.querySelector(".dice");
const diceElBG = document.querySelector(".dice-background");

// Selecting buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Initialization - Resets all the classes

let scores, currentScore, activePlayer, playing;

const init = function () {
  // Reseting the scores
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Removing the classes
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");

  //Hiding the dice
  diceEl.classList.add("hidden");
  diceElBG.style.backgroundImage = "";

  // Current Score
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};
//Running the above code
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`Generated Random Number - ${dice}`);

    //2. Display the dice
    diceEl.classList.remove("hidden");
    diceEl.src = diceImages[dice];
    diceElBG.style.backgroundImage = `url(${diceImages[dice]})`;

    //3. Search for rolled 1 , switch to next player
    if (dice != 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// Holding the score
btnHold.addEventListener("click", function () {
  if (playing) {
    console.log("Hold Button");
    // 1. Add current score to active players score
    scores[activePlayer] += currentScore;
    console.log(`ScoreActivePlayer: ${scores[activePlayer]}`);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check score is altleast 100 >=100
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      diceElBG.style.backgroundImage = `url(${diceImages[7]})`;
      //  Finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      switchPlayer();
    }
  }
  // Switch to next player
});

// III. Reseting the game
btnNew.addEventListener("click", init);

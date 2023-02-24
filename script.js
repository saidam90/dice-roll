'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const totalScores = [0, 0]; //because we have 2 players
let currentScore = 0;
let activePlayer = 0; //0 or 1
let playing = true;

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
  //1.set the current score to 0;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  //2.Set active player from player 0 to player 1 and vice versa
  activePlayer = activePlayer === 0 ? 1 : 0;
  //3.css - switch between pink colors to show the active player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    //2. display a dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. check for rolled 1: if true - switch the player, else if false - add dice roll to the current score;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1.add current score to the score of the active player
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];
    //2.check if score is >= 100
    if (totalScores[activePlayer] >= 15) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceEl.classList.add('hidden');
      // btnRoll.classList.add('hidden');
      // btnHold.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

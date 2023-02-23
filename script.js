'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScorePlayer0 = 0;
let currentScorePlayer1 = 0;

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. generate a random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);
  //2. display a dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. check for rolled 1: if true - switch the player, else if false - add dice roll to the current score;
  if (dice !== 1) {
    currentScorePlayer0 += dice;
    currentScore0El.textContent = currentScorePlayer0;
  } else {
    //1.set Current = 0;
    currentScore0El.textContent = 0;
    //2.css - switch between pink colors to show the active player
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');
    //3.add score to player 1;
    currentScorePlayer1 += dice;
    currentScore1El.textContent = currentScorePlayer1;
  }
});

const switchPlayer = function () {};

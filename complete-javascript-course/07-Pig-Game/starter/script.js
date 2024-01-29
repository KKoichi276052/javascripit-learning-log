'use strict';

// Get elements
const player1ScoreEl = document.querySelector('#score--0');
const player2ScoreEl = document.querySelector('#score--1');
const player1CurrentScoreEl = document.querySelector('#current--0');
const player2CurrentScoreEl = document.querySelector('#current--1');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const resetBtn = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const players = document.querySelectorAll('.player');

let player1Score = 0;
let player1CurrentScore = 0;
let player2Score = 0;
let player2CurrentScore = 0;

// initialize
function init() {
  player1Score = 0;
  player1CurrentScore = 0;
  player2Score = 0;
  player2CurrentScore = 0;

  player1ScoreEl.textContent = player1Score;
  player1CurrentScoreEl.textContent = player1CurrentScore;
  player2ScoreEl.textContent = player2Score;
  player2CurrentScoreEl.textContent = player2CurrentScore;
}

// Functions

function rollDice(player) {
  // Generate number
  let num = Math.trunc(Math.random() * 6) + 1;

  // Change dice image
  dice.src = `dice-${num}.png`;

  // add generated number to current score if num is not 1
  if (num === 1) {
    players.forEach(player => {
      if (player.classList.contains('player--active')) {
        if (player.classList.contains('player--0')) {
          player1CurrentScore = 0;
          player1CurrentScoreEl.textContent = player1CurrentScore;
        } else {
          player2CurrentScore = 0;
          player2CurrentScoreEl.textContent = player2CurrentScore;
        }
      }
    });
    switchPlayer();
  } else {
    addToCurrent(num);
  }
}

function switchPlayer() {
  // switch active player view
  players.forEach(player => {
    player.classList.toggle('player--active');
  });
}

function addToCurrent(num) {
  players.forEach(player => {
    if (player.classList.contains('player--active')) {
      if (player.classList.contains('player--0')) {
        player1CurrentScore += num;
        player1CurrentScoreEl.textContent = player1CurrentScore;
      } else {
        player2CurrentScore += num;
        player2CurrentScoreEl.textContent = player2CurrentScore;
      }
    }
  });
}

function addToScore() {
  players.forEach(player => {
    if (player.classList.contains('player--active')) {
      if (player.classList.contains('player--0')) {
        player1Score += player1CurrentScore;
        player1ScoreEl.textContent = player1Score;
        player1CurrentScore = 0;
        player1CurrentScoreEl.textContent = player1CurrentScore;
      } else {
        player2Score += player2CurrentScore;
        player2ScoreEl.textContent = player2Score;
      }
    }
  });
}

// initialize
init();

// Event Listeners
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', addToScore);
holdBtn.addEventListener('click', switchPlayer);
resetBtn.addEventListener('click', init);

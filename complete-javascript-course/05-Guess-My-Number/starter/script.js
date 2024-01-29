'use strict';

const checkBtn = document.querySelector('.check');
const guessEl = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');
const numberEl = document.querySelector('.number');
let guessNumber;

let number;
let score = 20;
let highscore = 0;
scoreEl.textContent = score;
highscoreEl.textContent = highscore;

generateNumber();

// Function
function generateNumber() {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
}

function updateScore() {
  score--;
  scoreEl.textContent = score;
}

function updateHighscore() {
  if (score > highscore) {
    highscore = score;
    highscoreEl.textContent = score;
  }
}

function resetScore() {
  scoreEl.textContent = 20;
  score = 20;
}

function gameOver() {
  message.textContent = 'GAMEOVER! Another new game started';
  init();
}

function init() {
  generateNumber();
  resetScore();
  numberEl.textContent = '?';
  guessEl.value = '';
}

// Event listeners
checkBtn.addEventListener('click', () => {
  guessNumber = +guessEl.value;

  if (guessNumber === number) {
    message.textContent = 'You won! Click "Again" to play another game';

    // Update highscore
    updateHighscore();

    // Reveal correct number
    numberEl.textContent = number;
  } else if (guessNumber > 20 || guessNumber < 1) {
    message.textContent = 'Not valid number. Input 1 between 20';
  } else if (guessNumber > number) {
    message.textContent = 'lower';
    updateScore();
    if (score === 0) {
      gameOver();
    }
  } else if (guessNumber < number) {
    message.textContent = 'higher';
    updateScore();
    if (score === 0) {
      gameOver();
    }
  }
});

againBtn.addEventListener('click', () => {
  init();
});

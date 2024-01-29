'use strict';

// query selectors
const modalShowBtn = document.querySelectorAll('.show-modal');
const modalCloseBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// functions
function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// eventlisteners
modalShowBtn.forEach(btn => {
  btn.addEventListener('click', showModal);
});

modalCloseBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
window.addEventListener('keyup', e => {
  e.key === 'Escape' ? closeModal() : '';
});

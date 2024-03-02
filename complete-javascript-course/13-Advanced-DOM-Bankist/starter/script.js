'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContents = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Scroll smooth with JS
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();

//   // Matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   }
// });

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // this works but cumbersome
  // let number = clicked.getAttribute('data-tab');
  // console.log(number);

  tabsContents.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  // console.log(clicked.dataset.tab);

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal sections
const sections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imaTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imaTargets.forEach(img => imgObserver.observe(img));

const sliders = document.querySelectorAll('.slide');
const sliderLeftBtn = document.querySelector('.slider__btn--left');
const sliderRightBtn = document.querySelector('.slider__btn--right');
let activeSlide = 0;

// Function to set the initial position of each slider or update positions
const updateSliders = function (direction) {
  // Calculate the new activeSlide based on the direction
  if (direction === 'left') {
    activeSlide = activeSlide === 0 ? sliders.length - 1 : activeSlide - 1;
  } else if (direction === 'right') {
    activeSlide = activeSlide === sliders.length - 1 ? 0 : activeSlide + 1;
  }

  // Update each slider's position based on the new activeSlide
  sliders.forEach((slider, i) => {
    slider.style.transform = `translateX(${(i - activeSlide) * 100}%)`;
  });
};

// Initialize sliders to their starting positions without changing activeSlide
const initializeSliders = function () {
  sliders.forEach((slider, index) => {
    slider.style.transform = `translateX(${index * 100}%)`;
  });
  // Optionally, call updateSliders here if you want to ensure consistent positioning logic
  // updateSliders(); // Uncomment if you want to initialize with the first slide centered
};

// Attach event listeners or call these functions based on user interaction
initializeSliders(); // Initialize positions at script load or when needed

// Simplified slide control functions
const slideLeft = () => updateSliders('left');
const slideRight = () => updateSliders('right');

sliderLeftBtn.addEventListener('click', slideLeft);
sliderRightBtn.addEventListener('click', slideRight);

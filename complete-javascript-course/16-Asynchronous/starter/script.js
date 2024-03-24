'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
import { API_KEY } from './config.js';

///////////////////////////////////////

// const renderCountry = function (data, className = '') {
//   console.log(data.flags.png);
//   const html = `
// 		<article class="country ${className}">
// 			<img class="country__img" src="${data.flags.png}" />
// 			<div class="country__data">
// 				<h3 class="country__name">${data.name[Object.keys(data.name)[0]]}</h3>
// 				<h4 class="country__region">${data.region}</h4>
// 				<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//           1
//         )} people</p>
// 				<p class="country__row"><span>🗣️</span>${
//           data.languages[Object.keys(data.languages)[0]]
//         }</p>
// 				<p class="country__row"><span>💰</span>${
//           data.currencies[Object.keys(data.currencies)[0]].name
//         }</p>
// 			</div>
// 		</article>
// 	`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // console.log(data.currencies[Object.keys(data.currencies)[0]].name);
//     renderCountry(data);

//     const [neighbour] = data.borders;
//     console.log(neighbour);

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('germany');

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`Country not found (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found');

//       // don't chain .then after code below, but after previous then
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🤯🤯🤯`);
//       renderError(`Something went wrong 🤯🤯 ${err.message}.`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lon } = pos.coords;
      return fetch(
        `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=${API_KEY}`
      );
    })
    .then(response => {
      console.log(response.json);
      if (!response.ok)
        throw new Error(`Something went wrong (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
    })
    .catch(err => {
      renderError(err);
      console.log(err);
    });
};

btn.addEventListener('click', function () {
  whereAmI();
  // whereAmI(19.037, 72.873);
  // whereAmI(-33.933, 18.474);
});

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));

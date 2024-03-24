'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
import { API_KEY } from './config.js';

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
		<article class="country ${className}">
			<img class="country__img" src="${data.flags.png}" />
			<div class="country__data">
				<h3 class="country__name">${data.name[Object.keys(data.name)[0]]}</h3>
				<h4 class="country__region">${data.region}</h4>
				<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
          1
        )} people</p>
				<p class="country__row"><span>🗣️</span>${
          data.languages[Object.keys(data.languages)[0]]
        }</p>
				<p class="country__row"><span>💰</span>${
          data.currencies[Object.keys(data.currencies)[0]].name
        }</p>
			</div>
		</article>
	`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

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

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not found (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found');

      // don't chain .then after code below, but after previous then
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 🤯🤯🤯`);
      renderError(`Something went wrong 🤯🤯 ${err.message}.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  // getCountryData('australia');
});

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// Create Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('lottery draw is happening');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN');
//     } else {
//       reject('You lost');
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 sec passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 sec passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 sec passed');
//     return wait(1);
//   });

const whereAmI = async function () {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lon } = position.coords;

    const resGeo = await fetch(
      `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=${API_KEY}`
    );
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
    );
    if (!res.ok) throw new Error('Problem getting location data');

    const data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err}`);
    renderError(`something went wrong ${err.message}`);
  }
};

// whereAmI();
// console.log('first');

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: finished getting location');
})();

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data);
    console.log(data.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(err);
  }
};

// get3Countries('japan', 'mongol', 'canada');

// async race
(async function () {
  const [res] = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/spain`),
    getJSON(`https://restcountries.com/v3.1/name/sweden`),
    getJSON(`https://restcountries.com/v3.1/name/finland`),
  ]);
  console.log(res);
  console.log(res[0]);
})();

Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.all([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.any([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

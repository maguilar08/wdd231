// weather.js
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const forecastContainer = document.getElementById('forecast-cards');

const myKey = "e9c0508d0d569a19c373360419075333"; 
const myLat = "-17.3818";
const myLog = "-66.16064";

// build urls
const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLog}&appid=${myKey}&units=metric`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLog}&appid=${myKey}&units=metric`;

// fetch current weather
async function fetchCurrent() {
  try {
    const resp = await fetch(currentURL);
    if (!resp.ok) throw new Error('Current weather fetch error');
    const data = await resp.json();
    displayCurrent(data);
  } catch (err) {
    console.error(err);
    if (myTown) myTown.textContent = 'Weather unavailable';
  }
}

// fetch forecast
async function fetchForecast() {
  try {
    const resp = await fetch(forecastURL);
    if (!resp.ok) throw new Error('Forecast fetch error');
    const data = await resp.json();
    displayForecast(data);
  } catch (err) {
    console.error(err);
    if (forecastContainer) forecastContainer.innerHTML = '<p>Forecast unavailable</p>';
  }
}

function displayCurrent(data) {
  if (!data) return;
  myTown.textContent = data.name || 'Cochabamba';
  myDescription.textContent = data.weather?.[0]?.description || '';
  myTemperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  myGraphic.setAttribute('src', iconsrc);
  myGraphic.setAttribute('alt', data.weather[0].description);
}

// helper to get date string YYYY-MM-DD
function ymd(d) {
  const dt = new Date(d);
  return dt.toISOString().split('T')[0];
}

function displayForecast(data) {
  if (!data || !data.list) return;
  // group forecast items by date
  const groups = {};
  data.list.forEach(item => {
    const date = ymd(item.dt * 1000);
    if (!groups[date]) groups[date] = [];
    groups[date].push(item);
  });

  // get unique dates, skip today (we want next days)
  const dates = Object.keys(groups).sort();
  const today = ymd(Date.now());
  const nextDates = dates.filter(d => d !== today).slice(0, 3); // next 3 days

  forecastContainer.innerHTML = '';
  nextDates.forEach(d => {
    const dayItems = groups[d];

    // try to find the item at 12:00:00, fallback to middle item
    let chosen = dayItems.find(it => new Date(it.dt * 1000).getHours() === 12);
    if (!chosen) chosen = dayItems[Math.floor(dayItems.length / 2)];

    const dateObj = new Date(d);
    const weekday = dateObj.toLocaleDateString(undefined, { weekday: 'short' });
    const temp = Math.round(chosen.main.temp);
    const desc = chosen.weather?.[0]?.description || '';
    const icon = chosen.weather?.[0]?.icon || '';

    const div = document.createElement('div');
    div.className = 'forecast-card';
    div.innerHTML = `
      <div class="day">${weekday}</div>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" style="width:48px;height:48px">
      <div class="temp"><strong>${temp}&deg;C</strong></div>
      <div class="desc">${desc}</div>
    `;
    forecastContainer.appendChild(div);
  });
}

// start both
fetchCurrent();
fetchForecast();

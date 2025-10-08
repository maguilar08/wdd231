// select HTML elements in the document
//const currentTemp = document.querySelector('#current-temp');
//const weatherIcon = document.querySelector('#weather-icon');
//const captionDesc = document.querySelector('figcaption');

//SELECT HTMLELEMENTS IN THE DOCUMENT
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

//CREATE REQUIED VARIABLES FOR THE URL
const myKey = "e9c0508d0d569a19c373360419075333"
const myLat ="-17.3818"   // -8117.3853361425016, -66.16064838509126
const myLog ="-66.16064"

//CONSTRUCT A FULL PATH USING TEMPLATE LITERALS
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLog}&appid=${myKey}&units=metric`

//TRY TO GRAB THE CURRENT WEATHER DATA
async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  //DISPLAY THE JSON DATA INTO MY WEB PAGE
    function displayResults(data) {
       // console.log('hello')
        myTown.innerHTML = data.name
        myDescription.innerHTML = data.weather[0].description
        myTemperature.innerHTML = `${data.main.temp}&deg;C`
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        myGraphic.setAttribute('SRC', iconsrc)
        myGraphic.setAttribute('alt', data.weather[0].description)
    }

  //START THE PROCESS
  apiFetch(); 

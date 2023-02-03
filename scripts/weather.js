const currentTemp = document.querySelector("#temperature");
const weatherDiv = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-caption");
const apiKey = "01732e19bc8a2c92ed1d2688505d9720";

let url = "https://api.openweathermap.org/data/2.5/weather?lat=4.4389&lon=-75.2322&appid=01732e19bc8a2c92ed1d2688505d9720&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults (weatherdata) {
    currentTemp.innerHTML = weatherdata.main.temp.toFixed(0);
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const desc = weatherdata.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
    descArray = desc.split(" ");

    for (let i = 0; i < descArray.length; i++) {
      descArray[i] = descArray[i][0].toUpperCase() + descArray[i].substr(1);
    }
  
    let desc1 = descArray.join(' ');

    captionDesc.textContent = desc1;
}
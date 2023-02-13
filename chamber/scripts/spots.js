// Create random Spot Cards in the Home Page

const requestURL = "https://kevinjgarzonp.github.io/wdd230/chamber/data/members.json";
let companies = undefined;

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    companies = jsonObject['companies'];
    displaySpots();
});


function randomNum (min, max) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

let spots = [];

while (spots.length < 3) {
    let randomNumber = randomNum(0, 4);
    if (spots.indexOf(randomNumber) < 0) {
        spots.push(randomNumber);
    }
}

const spotlight = document.querySelector("#spotlight");

function displaySpots () {
    spots.forEach((spot) => {
        const spotDiv = document.createElement("div");
        spotDiv.className = "spot";
        const spotTitle = document.createElement("h3");
        spotTitle.textContent = companies[spot].name;
        const spotSubtitle = document.createElement("h4");
        spotSubtitle.textContent = companies[spot].slogan;
        const spotImg = document.createElement("img");
        spotImg.src = companies[spot].image;
        spotImg.alt = `${companies[spot].name} logo`;
        const spotText = document.createElement("p");
        spotText.textContent = companies[spot].info;
        const spotWebsite = document.createElement("a");
        spotWebsite.href = companies[spot].websiteURL;

        spotDiv.appendChild(spotTitle);
        spotDiv.appendChild(spotSubtitle);
        spotDiv.appendChild(spotImg);
        spotDiv.appendChild(spotText);
        spotDiv.appendChild(spotWebsite);

        spotlight.appendChild(spotDiv);
    })
}
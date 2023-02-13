let currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

let lastestUpdate = document.lastModified;

let months = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12")

let completeDate = new Date(Date.parse(lastestUpdate));
let day = completeDate.getDate();
let month = months[completeDate.getMonth()];
let year = completeDate.getFullYear();


document.getElementById("latestUpdate").textContent = month + " / " + day + " / " + year;

let letter_months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
let letter_days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")

let currentDate = new Date();

let currentWeekDay = letter_days[currentDate.getDay()];
let currentDay = currentDate.getDate();
let currentMonth = letter_months[currentDate.getMonth()];


const menu_button = document.querySelector(".menub");
const mainnav = document.querySelector(".navigation");
const naveg = document.querySelector(".nav-space");

menu_button.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);
menu_button.addEventListener("click", () => {naveg.classList.toggle("wider")}, false);

const joinButton = document.querySelector("#joinButton");
joinButton.addEventListener("click", () => {
    location.href="./join.html";
})

if (currentWeekDay === "Monday" | currentWeekDay === "Tuesday" | currentWeekDay === "Wednesday") {
    const section_hero = document.querySelector("#div-hero");
    const invitation = document.createElement("p");
    const joinButton = document.querySelector("#joinButton");
    const heroText = document.querySelector("#hero-text");
    console.log(joinButton);
    invitation.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    invitation.className = "invitation"
    section_hero.appendChild(invitation);
    window.addEventListener("resize", () => {
        if (document.body.clientWidth < 917) {
            joinButton.style.bottom = "55%";
            heroText.style.top = "5%";
        }
        else {
            joinButton.style.bottom = "30%";
            heroText.style.top = "5%";
        }
    })
}

// Create random Spot Cards in the Home Page

const requestURL = "https://kevinjgarzonp.github.io/wdd230/chamber/data/members.json";
let companies = undefined;

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    companies = jsonObject['companies'];
    console.log(companies);
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
    console.log(randomNumber);
}

const spotlight = document.querySelector("#spotlight");

function displaySpots () {
    spots.forEach((spot) => {
        const spotDiv = document.createElement("div");
        spotDiv.className = "spot";
        const spotTitle = document.createElement("h3");
        console.log(companies[spot].name);

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
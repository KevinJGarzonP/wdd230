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


/* Days from last time Visit Counter in Discover Page */

let currentVisit = Math.floor(Date.now() / 86400000);
const messageSpan = document.querySelector("#days-visit");

if (!localStorage.getItem("visitTime")) {
    let message = "This is your first visit. Welcome!";
    messageSpan.textContent = message;
    setVisitTime();
} else {
    lastVisit = getVisitTime();
    numberOfDays = currentVisit - lastVisit;
    let message = `Yout last visit was ${numberOfDays} days ago. Thanks for coming!`;
    messageSpan.textContent = message;
    setVisitTime();
}

function setVisitTime() {
    localStorage.setItem("visitTime", JSON.stringify(currentVisit));
}

function getVisitTime() {
    return JSON.parse(localStorage.getItem("visitTime"));
}
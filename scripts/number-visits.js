const visitsSpan = document.querySelector("#number-visits");
let numberVisits = 0;

function getNumberVisits () {
    return localStorage.getItem("visitsNumber");
}

function setNumberVisits () {
    localStorage.setItem("visitsNumber", numberVisits);
}

if (localStorage.getItem("visitsNumber")) {
    numberVisits = getNumberVisits();
    numberVisits++
    visitsSpan.textContent = `You have visited us ${numberVisits} times. Thank you for coming!`
    setNumberVisits();
} else {
    numberVisits = 1;
    visitsSpan.textContent = `You have visited us ${numberVisits} time. Welcome!`
    setNumberVisits();
}
let currentYear = new Date().getFullYear();

document.querySelector("#cYear").innerHTML = currentYear;

let lastestUpdate = document.lastModified;

let months = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12")

let completeDate = new Date(Date.parse(lastestUpdate));
let day = completeDate.getDate();
let month = months[completeDate.getMonth()];
let year = completeDate.getFullYear();

document.querySelector("#l-update").innerHTML = month + " / " + day + " / " + year;
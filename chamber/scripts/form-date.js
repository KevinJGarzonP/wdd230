const submitBtn = document.querySelector("#submit");
const hiddenDate = document.querySelector("#date");

submitBtn.addEventListener("submit", () => {
    const formDate = new Date();
    hiddenDate.value = formDate;
    console.log(hiddenDate.value);
})

// let completeDate = new Date(Date.parse(lastestUpdate));
// let day = completeDate.getDate();
// let month = months[completeDate.getMonth()];
// let year = completeDate.getFullYear();

// document.getElementById("latestUpdate").textContent = month + " / " + day + " / " + year;

// let letter_months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
// let letter_days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")

// let currentDate = new Date();

// let currentWeekDay = letter_days[currentDate.getDay()];
// let currentDay = currentDate.getDate();
// let currentMonth = letter_months[currentDate.getMonth()];
const submitBtn = document.querySelector("#submit");
const hiddenDate = document.querySelector("#date");

submitBtn.addEventListener("submit", () => {
    const formDate = new Date();
    hiddenDate.value = formDate;
    console.log(hiddenDate.value);
})
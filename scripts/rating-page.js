const ratingValue = document.querySelector("#rating-value");
const ratingBar = document.querySelector("#rating");

let rateNumber = ratingBar.value;
ratingValue.innerHTML = rateNumber;

ratingBar.addEventListener("change", () => {
    rateNumber = ratingBar.value;
    //console.log(rateNumber);
    ratingValue.innerHTML = rateNumber;
})
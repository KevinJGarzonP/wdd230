const submitForm = document.querySelector("#submitButton");
const nameForm = document.querySelector("#name");
const emailForm = document.querySelector("#email");
const rateForm = document.querySelector("#rating");
const passForm = document.querySelector("#password");

const form = document.querySelector("#contact-info");

const user = document.querySelector("#name-value");
const email = document.querySelector("#email-value");
const rate = document.querySelector("#rate-value");
const pass = document.querySelector("#pass-value");

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

submitForm.addEventListener("click", () => {

    if (nameForm.value) {
        user.innerHTML = nameForm.value;
    }

    if (emailForm.value) {
        email.textContent = emailForm.value;
    }

    if (rateForm.value) {
        rate.textContent = rateForm.value;
    }

    if (passForm.value) {
        pass.textContent = passForm.value;
    }
})

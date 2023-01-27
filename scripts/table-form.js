const submitForm = document.querySelector("#submitButton");
const nameForm = document.querySelector("#name");
const emailForm = document.querySelector("#email");
const rateForm = document.querySelector("#rating");
const passForm = document.querySelector("#password");


const table = document.querySelector("#form-table");
const user = document.querySelector("#name-value");
const email = document.querySelector("#email-value");
const rate = document.querySelector("#rate-value");
const pass = document.querySelector("#pass-value");

submitForm.addEventListener("click", () => {
    let nameValue = nameForm.value;
    let emailValue = emailForm.value;
    let rateValue = rateForm.value;
    let passValue = passForm.value;

    if (nameForm.value) {
        user.innerHTML = nameValue;
    }

    if (emailForm.value) {
        email.textContent = emailValue;
    }

    if (rateForm.value) {
        rate.textContent = rateValue;
    }

    if (passForm.value) {
        pass.textContent = passValue;
    }
})

const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#repeat-password");
const message = document.querySelector("#messageform");

pass2.addEventListener("focusout", () => {
    if (pass1.value !== pass2.value) {
        message.textContent = "The passwords don't match. Try again."
        message.style.display = "block";
        message.style.color = "red";
        message.style.padding = "5px 0";       
        pass1.focus();
    } else {
        message.textContent = "The passwords match."
        message.style.color = "green";
        message.style.padding = "5px 0";       
    }
})
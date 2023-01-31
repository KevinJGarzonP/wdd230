const main = document.querySelector("main");
const darkButton = document.querySelector("#mode");

//console.log(darkButton);

darkButton.addEventListener("click", () => {
    if (darkButton.textContent == "Dark Mode") {
        main.classList.toggle("dark-mode");
    }
})
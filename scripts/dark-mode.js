const main = document.querySelector("main");
const darkButton = document.querySelector(".mode");

darkButton.addEventListener("click", () => {
    if (darkButton.textContent.includes("Dark Mode") {
        main.classList.toggle("dark-mode");
        darkButton.textContent = "Light Mode";
    } else if (main.className == "dark-mode") {
        main.classList.toggle("light-mode");
        darkButton.textContent = "Dark Mode";
    }
})
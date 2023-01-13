const hamButton = document.querySelector(".menu-button");
const items = document.querySelectorAll(".menu-item");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("close");
    if (hamButton.className == "menu-button close") {
        hamButton.firstChild.src = "./images/x-button.svg";
    } else {
        hamButton.firstChild.src = "./images/ham-button.svg";
    }
    items.forEach((item) => {
        item.classList.toggle("open");
        
    })
})





const requestURL = "https://kevinjgarzonp.github.io/wdd230/chamber/data/members.json";
const article = document.querySelector('#directory');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];

    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let pPhone = document.createElement("p");
    let pWorkers = document.createElement("p");
    let pAddress = document.createElement("p");
    let pLevel = document.createElement("p");
    let pDate = document.createElement("p");
    let img = document.createElement("img");
    let a = document.createElement("a");

    h2.textContent = company.name;
    pPhone.textContent = `Phone number: ${company.phone}`;
    pAddress.textContent = `Address: ${company.address}`;
    pAddress.classList = "no-list-show";
    pLevel.textContent = `Membership level: ${company.level}`;
    pLevel.classList = "no-list-show";
    pWorkers.textContent = `Number of members: ${company.workers}`;
    pWorkers.classList = "no-list-show";

    img.src = company.image;
    img.alt = company.name;

    a.textContent = "Visit our website";
    a.href = company.websiteURL;

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(pAddress);
    card.appendChild(pPhone);
    card.appendChild(pWorkers);
    card.appendChild(pLevel);
    card.appendChild(a);

    card.className = "main-element";

    article.appendChild(card);
}

const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");

gridButton.addEventListener("click", changeToGrid);
listButton.addEventListener("click", changeToList);


function changeToGrid() {
    article.classList.add("grid-mode");
    article.classList.remove("list-mode");
}

function changeToList() {
    article.classList.add("list-mode");
    article.classList.remove("grid-mode");
}
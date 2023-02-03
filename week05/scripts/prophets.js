const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
//const cardsInfo = document.querySelector(".cards");

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];

    prophets.forEach(displayProphets);
  });

console.log(fetch(url))


function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let number = document.createElement("p");
    let birth = document.createElement("p");
    let place = document.createElement("p");

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    // Change the textContent property of the p elements to contain the prophet's order number, birthdate and birthplace
    number.textContent = prophet.order;
    birth.textContent = `Birthdate: ${prophet.birthdate}`;
    place.textContent = `Birthplace: ${prophet.birthplace}`;
    
    let sufix = "";
    
    if (prophet.order == 1) {
        sufix = "st";
    }
    else if (prophet.order == 2) {
        sufix = "nd";
    }
    else if (prophet.order == 3) {
        sufix = "rd";
    }
    else {
        sufix = "th";
    }

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${sufix} Latter-day President`);
    portrait.setAttribute("loading", "lazy");

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birth);
    card.appendChild(place);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}
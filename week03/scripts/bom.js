const entrada = document.querySelector("#favchap");
const boton = document.querySelector("button");
const lista = document.querySelector("#list");

let chapters = getChapterList() || [];

chapters.forEach((chapter) => {
    displayList(chapter);
})

boton.addEventListener("click", function() {
    if (entrada.value !== "") {
        displayList(entrada.value);
        chapters.push(entrada.value);
        setChapterList();
        entrada.focus();
        entrada.value = "";        
    }
});

function displayList (entrada) {
    const elemento = document.createElement("li");
    const quitar = document.createElement("button");
    elemento.textContent = entrada.value;
    quitar.textContent = "❌";
    quitar.ariaLabel = "delete button";
    elemento.appendChild(quitar);
    lista.appendChild(elemento);

    quitar.addEventListener("click", function() {
        lista.removeChild(elemento);
    })
}
const entrada = document.querySelector("#favchap");
const boton = document.querySelector("button");
const lista = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
    displayList(chapter);
})

boton.addEventListener("click", function() {
    if (entrada.value !== "") {
        displayList(entrada.value);
        chaptersArray.push(entrada.value);
        setChapterList();
        entrada.focus();
        entrada.value = "";        
    }
});

function displayList (item) {
    const elemento = document.createElement("li");
    const quitar = document.createElement("button");
    elemento.textContent = item;
    quitar.textContent = "❌";
    quitar.ariaLabel = "delete button";
    elemento.appendChild(quitar);
    lista.appendChild(elemento);

    quitar.addEventListener("click", function() {
        lista.removeChild(elemento);
        deleteChapter(elemento.textContent);
        entrada.focus();
    })
}

function setChapterList() {
    localStorage.setItem("myBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((entrada) => entrada !== chapter);
    setChapterList();
}
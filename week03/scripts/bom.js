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
    localStorage.setItem("myBOMList", JSON.stringify(chapters));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapters = chapters.filter((entrada) => entrada !== chapter);
    setChapterList();
}
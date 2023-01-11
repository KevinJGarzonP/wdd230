const entrada = document.querySelector("#favchap");
const boton = document.querySelector("button");
const lista = document.querySelector("#list");

boton.addEventListener("click", function() {
    if (entrada.value !== "") {
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

        entrada.focus();
        entrada.value = "";
    }
});


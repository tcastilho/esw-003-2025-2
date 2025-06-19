import { loadPacotes } from "./stub.js";

function onLoadPacotes() {
    const placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = "<p>Loading</p>"
    loadPacotes((data) => {
        placeholder.innerHTML=`<p>${data.length} pacotes carregados</p>`;
    })
}


export { onLoadPacotes };
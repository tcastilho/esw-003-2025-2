import { loadPacotes } from "./stub.js";

function onLoadPacotes() {
    const table = document.getElementById("table");
    table.innerHTML = `
        <tr>
            <th>Descrição</th>
            <th>Cidade</th>
            <th>Nome do Hotel</th>
            <th>Preço</th>
        </tr>
    `

    loadPacotes((data) => {
        for(let i = 0; i < data.length; i++){

             let precoPacote = 0.0;
             for(let j = 0; j < data[i].items.length; j++){
                precoPacote += data[i].items[j].preco;
             }

            table.innerHTML += `
            <tr>
                <td>${data[i].descricao}</td>
                <td>${data[i].localidade.descricao}</td>
                <td>${data[i].items[0].nomeHotel}</td>
                <td>R$ ${precoPacote.toFixed(2)}</td>
            </tr>
            `
        }

    })
}


export { onLoadPacotes };
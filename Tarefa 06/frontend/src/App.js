import { useState } from 'react';
import Button from './components/Button.js';
import Container from './components/Container.js';
import Table from './components/Table.js';


function App() {
  const [data, setData] = useState([]);
  const title = 'Listar Pacotes de Viagem';
  const columns = ['Descrição', 'Cidade', 'Nome do Hotel', 'Preço'];

  const pacotesObj = data.map((pacote) => {
    let precoTotal = pacote.items.reduce((acc, pacote) => acc + pacote.preco,0)

    return {
      descricao: pacote.descricao,
      cidade: pacote.localidade.descricao,
      hotel: pacote.items[0].nomeHotel,
      preco: String(`R$\u00A0${precoTotal.toFixed(2)}`)
    }
  });

  console.log(pacotesObj)

  return (
    <Container>
      <Table title={title} data={pacotesObj} columns={columns}/>
      <Button setData={setData}/>
    </Container>
  );
}

export default App;
import { useState, useEffect } from 'react';
import { loadPacotes } from './stub.js';
import Criteria from './components/Criteria.js';
import Container from './components/Container.js';
import Table from './components/Table.js';

function App() {
  const [data, setData] = useState([]);
  const [criteria, setCriteria] = useState('');

  const onCriteriaChange = () => {
    const fetchData = async () => {
      const result = await loadPacotes(criteria);
      setData(result);
    };

    fetchData();
  }

  useEffect(onCriteriaChange, [criteria]);

  const title = 'Listar Pacotes de Viagem';
  const columns = ['Descrição', 'Cidade', 'Nome do Hotel', 'Preço'];

  const pacotesObj = data.map((pacote) => {
    const precoTotal = pacote.items.reduce((acc, item) => acc + item.preco, 0);

    return {
      descricao: pacote.descricao,
      cidade: pacote.localidade.descricao,
      hotel: pacote.items[0].nomeHotel ?? 'Hotel Genérico',
      preco: `R$\u00A0${precoTotal.toFixed(2)}`,
    };
  });

  return (
    <Container>
      <Criteria setCriteria={setCriteria} />
      <Table title={title} data={pacotesObj} columns={columns} />
    </Container>
  );
}

export default App;
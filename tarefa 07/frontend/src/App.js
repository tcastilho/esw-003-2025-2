import { useState, useEffect } from 'react';
import { loadPacotes } from './stub.js';

import Pacotes from './Pacotes.js';
import Criteria from './Criteria.js';


function App() {
  const [criteria, setCriteria] = useState('');
  const [dados, setData] = useState([]);
  
  const onCriteriaChange = () => {
    const fetchData = async () => {
      const data = await loadPacotes(criteria);
      console.log(`Pacotes carregados! : ${JSON.stringify(data)}`);
      setData(data);
    }
    fetchData();
  }

  useEffect(onCriteriaChange, [criteria])

  return (
    <>
      <Criteria setCriteria={setCriteria}/>
      <Pacotes dados={dados}/>
    </>
  );
}

export default App;

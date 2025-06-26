import { useState } from 'react';
import Button from './components/Button.js';
import Pacotes from './components/Pacotes.js';
import TableHeader from './components/TableHeader.js';


function App() {
  const [dados, setData] = useState([]);
  const title = 'Listar Pacotes de Viagem'
  return (
    <>
      <TableHeader title={title}>
        <Button setData={setData}/>
      </TableHeader>

      <div>
        <Pacotes dados={dados}/>
      </div>
    </>
  );
}

export default App;
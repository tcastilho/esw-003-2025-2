import { useLoaderData, useNavigate } from "react-router-dom";
import Criteria from "../criteria/Criteria.js";
import PacotesGrid from './PacotesGrid.js';
import Paginacao from '../paginacao/Paginacao.js';

import styled from 'styled-components';

const CriteriaWapper = styled.div`
  display: grid;
  label {
    font-weight: bold;
    font-size: smaller;
  }
`;

const Message = styled.p``;

function Pacotes() {
  const navigate = useNavigate();

  const { content: pacotes = [], number: currentPage, totalPages } = useLoaderData();

  const setCriteria = (criteria) => {
    if (criteria) {
      navigate(`/pacotes?q=${criteria}`);
    } else {
      navigate("/pacotes");
    }
  };

  return (
    <div>
      <CriteriaWapper>
        <label>Critério</label>
        <Criteria setCriteria={setCriteria}/>
      </CriteriaWapper>
      <Data dados={pacotes}/>
      <Paginacao currentPage={currentPage} totalPages={totalPages}/>
    </div>
  );
}

function Data(props) {
  const { dados } = props;
  if (!dados || dados.length === 0) {
     return (
       <Message>Nenhum pacote carregado</Message>
     );
  } else {
     return <PacotesGrid dados={dados}/>;
  }
}

export default Pacotes;
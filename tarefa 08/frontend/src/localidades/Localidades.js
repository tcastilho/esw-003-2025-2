import { useLoaderData, useNavigate } from "react-router-dom";
import Criteria from "../criteria/Criteria.js";
import LocalidadesGrid from "./LocalidadesGrid.js"
import Paginacao from '../paginacao/Paginacao.js'

import styled from 'styled-components';

const CriteriaWapper = styled.div`
  display: grid;
  label {
    font-weight: bold;
    font-size: smaller;
  }
`;

const Message = styled.p`
`;

function Localidades(props) {
  const navigate = useNavigate();
  const setCriteria = (criteria) => {
    if (criteria) {
      navigate(`/localidades?q=${criteria}`)
    } else {
      navigate("/localidades");
    }
  };
  const { content: localidades = [], number: currentPage, totalPages } = useLoaderData();

  return (
    <div>
      <CriteriaWapper>
        <label>Critério</label>
        <Criteria setCriteria={setCriteria}/>
      </CriteriaWapper>
      <Data dados={localidades}/>
      <Paginacao currentPage={currentPage} totalPages={totalPages}/>
    </div>
  )
}

function Data(props) {
  const { dados } = props;
  if (!dados || dados.length === 0) {
     return (
       <Message>Nenhuma localidade carregada</Message>
     );
  } else {
     return <LocalidadesGrid dados={dados}/>;
  }
}

export default Localidades;
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const DataRow = styled.tbody`
  &:hover {
    background: rgba(0,0,0,0);
	  color: darkgrey;
    cursor: pointer;
	  box-shadow: inset 0 0 0 2px darkgrey;
  }
  &:nth-child(even) {
    background: lightgray;
  }
`;

const DataCell = styled.td`
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CidadeCell = styled(DataCell)`
  padding-left: 12px;
`;

const EstadoCell = styled(DataCell)`
  text-align: center;
`;

function PacoteRow(props) {
  const { localidade } = props;
  const navigate = useNavigate();

  const selectLocalidade = () => {
    navigate(`/localidades/${localidade.id}`);
  }

  return (
    <DataRow onClick={selectLocalidade}>
      <tr>
        <CidadeCell>{localidade.cidade}</CidadeCell>
        <EstadoCell>{localidade.estado}</EstadoCell>
      </tr>

    </DataRow>
  );
}

export default PacoteRow;
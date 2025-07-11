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

const DescricaoCell = styled(DataCell)`
  padding-left: 12px;
`;

const LocalidadeCell = styled(DataCell)`
  text-align: center;
`;

const ValorCell = styled(DataCell)`
  text-align: right;
  padding-right: 12px;
`;

function PacoteRow(props) {
  const { pacote } = props;
  const navigate = useNavigate();

  const selectPacote = () => {
    navigate(`/pacotes/${pacote.id}`);
  }

  return (
    <DataRow onClick={selectPacote}>
      <tr>
        <DescricaoCell>{pacote.descricao}</DescricaoCell>
        <LocalidadeCell>{pacote.localidade.cidade}</LocalidadeCell>
        <ValorCell>{String(`R$\u00A0${pacote.valor.toFixed(2)}`)}</ValorCell>
      </tr>

    </DataRow>
  );
}

export default PacoteRow;
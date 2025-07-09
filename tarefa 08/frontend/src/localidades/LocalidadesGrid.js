import LocalidadeRow from './LocalidadeRow.js';

import styled from 'styled-components';

const LocalidadeTable = styled.table`
  border-collapse: collapse;
`;

const HeaderRow = styled.thead`
  height: 46px;
  border-bottom: 1px solid;
`;

const HeaderCell = styled.th`
`;


const CidadeCell = styled(HeaderCell)`
`

const EstadoCell = styled(HeaderCell)`
`


function LocalidadesGrid(props) {
  const { dados } = props;
  const rows = dados.map((x, index) => (<LocalidadeRow key={index} localidade={x}/>))

  return (
      <LocalidadeTable>
          <LocalidadeTableHeader/>
          {rows}
      </LocalidadeTable>
  );
}

function LocalidadeTableHeader() {
  return (
    <HeaderRow>
      <tr>
        <CidadeCell>Cidade</CidadeCell>
        <EstadoCell>Estado</EstadoCell>
      </tr>
    </HeaderRow>
  )
}

export default LocalidadesGrid;
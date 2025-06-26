
import styled from 'styled-components';

const Message = styled.p`
`;

function Pacotes(props) {
  const { dados } = props;

  if (dados.length === 0) {
    return (<></>);
  } else {
    return (
        <Message>{dados.length} pacotes carregados</Message>
    );
  }
}

export default Pacotes;
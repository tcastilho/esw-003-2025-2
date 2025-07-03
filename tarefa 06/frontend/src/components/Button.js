
import styled from 'styled-components';
import { loadPacotes } from '../stub.js';

const InnerButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  background-color: #e7e7e7;
  color: black;
  transition: background-color 0.2s ease, transform 0.1s ease;
  &:hover{
    background-color: #dcdcdc;
  }
`;

function Button(props) {
  const { setData } = props;
  const onClick = async () => {
    const data = await loadPacotes();
    setData(data)
  }

  return (
      <InnerButton onClick={onClick}>Carregar</InnerButton>
  );
}

export default Button;

import styled from 'styled-components';

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin: 20px auto;
`;

const InnerInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #ccc;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    transition: border-color 0.3s ease-in-out;

    &:focus {
        border-color: #007bff;
    }
`;

function Criteria(props) {
  const {setCriteria} = props;

  const onCriteriaChange = (e) => setCriteria(e.target.value);

  return (
    <SearchWrapper>
        <InnerInput placeholder="Digite um critério de busca..." onChange={onCriteriaChange}/>
    </SearchWrapper>
  );
}

export default Criteria;
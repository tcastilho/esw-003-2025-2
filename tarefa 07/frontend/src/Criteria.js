
import styled from 'styled-components';

const InnerInput = styled.input`
`;

function Criteria(props) {
  const {setCriteria} = props;

  const onCriteriaChange = (e) => setCriteria(e.target.value);
  
  return (
      <InnerInput onChange={onCriteriaChange}></InnerInput>
  );
}

export default Criteria;
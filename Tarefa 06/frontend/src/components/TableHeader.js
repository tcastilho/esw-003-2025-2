import styled from "styled-components";

const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 8px;
    padding: 0 50px;
`;

function TableHeader (props) {
    return (
        <Header>
            <h2>{props.title}</h2>
            {props.children}
        </Header>
    );
}

export default TableHeader;
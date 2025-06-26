import styled from "styled-components";
import Container from "./Container";

const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 8px;
    padding: 0 50px;
`;

function Table (props) {
    return (
        <Container>
            <Header>
                <h2>{props.title}</h2>
            </Header>
            <table>
                <tr>
                    //th...
                </tr>
                <tr>
                    //td..
                </tr>
            </table>
        </Container>
        
    );
}

export default Table;
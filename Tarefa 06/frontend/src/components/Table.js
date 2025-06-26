import styled from "styled-components";

const TableWrapper = styled.div`
    width: 90%;
    padding: 0 30px 30px 30px;
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color:rgb(233, 233, 233);
    }

`;


function Table (props) {
    const {title, data, columns} = props;

    return (
        <TableWrapper>
            <Header>
                <h2>{title}</h2>
            </Header>
            <StyledTable>
                <thead>
                    <tr>
                        {columns && columns.map((column, keyIndex) =>(
                            <th key={keyIndex}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((pacote, keyIndex) => (
                        <tr key={keyIndex}>
                            {Object.values(pacote).map((item, keyIndex) =>(
                                <td key={keyIndex}>{item}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        </TableWrapper>

    );
}

export default Table;
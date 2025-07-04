import { useLoaderData } from 'react-router-dom';
import styled from "styled-components";

const Main = styled.main`
    padding: 10px;
    label {
        font-weight: bold;
    }
`
const ItemDetail = styled.div`
    font-size: smaller;
    padding-bottom: 12px;
    display: grid;
`

function LocalidadeDetails ()  {
    const localidade = useLoaderData();

    return(
        <Main>
            <h1>Localidade {localidade.id}</h1>
            <ItemDetail>
                <label>Cidade</label>
                <span>{localidade.cidade}</span>
            </ItemDetail>
            <ItemDetail>
                <label>Estado</label>
                <span>{localidade.estado}</span>
            </ItemDetail>
        </Main>
    )
}


export default LocalidadeDetails
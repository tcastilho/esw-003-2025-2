import styled from 'styled-components';

const Container = styled.div`
  /* --- Propriedades de Estrutura (do exemplo anterior) --- */
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;

  /* --- NOVO: Propriedades de Flexbox --- */
  display: flex;

  /* 'column' é o padrão mais seguro para um container de página, 
    pois os elementos se comportarão como blocos (um embaixo do outro).
  */
  flex-direction: column; 

  /* Alinha os itens no eixo transversal. Como a direção é 'column',
    o eixo transversal é o HORIZONTAL. 'center' vai centralizar o conteúdo.
  */
  align-items: center;

  /* Alinha os itens no eixo principal. Como a direção é 'column',
    o eixo principal é o VERTICAL. 'flex-start' alinha no topo.
  */
  justify-content: flex-start; 
`;

export default Container;
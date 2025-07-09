import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';


const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const PageInfo = styled.span`
  color: #333;
  font-size: 1rem;
`;

const PageLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  color: #007bff;
  transition: background-color 0.2s, color 0.2s;

  ${({ disabled }) =>
    disabled &&
    `
      pointer-events: none;
      color: #6c757d;

  `}
`;

function Paginacao({ currentPage, totalPages }) {
  const location = useLocation();

  const getPageLink = (pageNumber) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', pageNumber);
    return `?${searchParams.toString()}`;
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage >= totalPages - 1;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <PaginationWrapper>
      <PageLink to={getPageLink(currentPage - 1)} disabled={isFirstPage}>
        &larr; Anterior
      </PageLink>

      <PageInfo>
        Página {currentPage + 1} de {totalPages}
      </PageInfo>

      <PageLink to={getPageLink(currentPage + 1)} disabled={isLastPage}>
        Próxima &rarr;
      </PageLink>
    </PaginationWrapper>
  );
}

export default Paginacao;
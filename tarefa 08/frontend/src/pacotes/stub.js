async function loadPacotes(criteria, page, size) {
  let query = '';
  if(criteria){
    query = `q=${criteria}&`;
  }

  const pagination = new URLSearchParams({
    page: page,
    size: size,
  }).toString();

  const response = await fetch(`http://localhost:8080/pacotes?${query}${pagination}`);
  if (!response.ok) {
    throw new Error('Falha ao buscar pacotes');
  }

  const pageData = await response.json();
  return pageData;
}

async function loadPacote(id) {
  const endpoint = `http://localhost:8080/pacotes/${id}`
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(`Carregado pacote (payload : ${data})`);
  return data;

}

export { loadPacotes, loadPacote };
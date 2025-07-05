async function loadLocalidades(criteria, page, size){
  let query = '';
  if(criteria){
    query = `q=${criteria}&`;
  }

  const pagination = new URLSearchParams({
    page: page,
    size: size,
  }).toString();

  const response = await fetch(`http://localhost:8080/localidades?${query}${pagination}`);
  if (!response.ok) {
    throw new Error('Falha ao buscar pacotes');
  }

  const pageData = await response.json();
  return pageData;
}

async function loadLocalidade(id) {
  const endpoint = `http://localhost:8080/localidades/${id}`
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(`Carregado localidade (payload : ${data})`);
  return data;

}


function endpointFor(criteria) {
  const endpoint = "http://localhost:8080/localidades";

  if (criteria) {
    return `${endpoint}?q=${criteria}`
  } else {
    return endpoint;
  }
}

export { loadLocalidades, loadLocalidade };
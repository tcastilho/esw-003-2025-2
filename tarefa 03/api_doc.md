# API de Pacotes
Endpoints e exemplos para a API de pacotes

## Pacotes

Base URL: `http://localhost:8080`

| Método | Endpoint      | Descrição                   |
| ------ | ------------- | --------------------------- |
| GET    | /pacotes      | Listar pacotes de viagem    |
| GET    | /pacotes/{id} | Visualizar pacote de viagem |
| POST   | /pacotes      | Criar pacote de viagem      |
| PUT    | /pacotes/{id} | Alterar pacote de viagem    |
| DELETE | /pacotes/{id} | Remover pacote de viagem    |

<div style="page-break-after: always;"></div>

### Listar Pacotes de viagem

GET `{baseurl}/pacotes` - Retorna uma lista com todos pacotes de viagem disponíveis

**Parâmetros**: Nenhum

**Responses**:

| Código | Descrição |
| ------ | --------- |
| 200    | Sucesso   |

*Corpo da response:*
```json
[
  {
    "descricao": "lorem ipsum dolor",
    "localidade": {
      "descricao": "Rua dos Gabs"
    },
    "itens": [
      {
        "preco": 140.5,
        "companiaAerea": "British Airways",
        "numeroVoo": "BA246"
      },
      {
        "preco": 140.5,
        "nomeHotel": "John Doe Hotel",
        "endereco": "Rua do Gab 123"
      },
      {
        "preco": 140.5,
        "marca": "Subaru",
        "modelo": "Imprenza WRTX STI"
      }
    ]
  }
]
```
<div style="page-break-after: always;"></div>

### Visualizar Pacote de Viagem
GET `{baseurl}/pacotes/{id}` - Retorna os detalhes de um único pacote de viagem pelo seu ID.

**Parâmetros:** `uuid : pacoteId` - Id do pacote a ser alterado - *obrigatório*

**Responses:**

| Código | Descrição |
| ------ | --------- |
| 200    | Sucesso   |

*Corpo da response:*
```json
{
  "descricao": "lorem ipsum dolor",
  "localidade": {
    "descricao": "Rua dos Gabs"
  },
  "itens": [
    {
      "preco": 140.5,
      "companiaAerea": "British Airways",
      "numeroVoo": "BA246"
    },
    {
      "preco": 140.5,
      "nomeHotel": "John Doe Hotel",
      "endereco": "Rua do Gab 123"
    },
    {
      "preco": 140.5,
      "marca": "Subaru",
      "modelo": "Imprenza WRTX STI"
    }
  ]
}
```

| Código | Descrição             |
| ------ | --------------------- |
| 404    | Pacote não encontrado |

<div style="page-break-after: always;"></div>

### Criar pacote de viagem
POST `{baseurl}/pacotes` - Adiciona um novo pacote de viagem ao sistema.

**Parâmetros:** Nenhum

**Corpo do request (obrigatório)**:
Objeto do pacote que será adicionado.

exemplo:
```json
{
  "descricao": "lorem ipsum dolor",
  "localidade": idLocalidade,
  "itens": [
	  idTranlsadoAereo,
	  idHospedagem,
	  idLocacaoVeiculo
   ]
}
```

**Responses:**

| Código | Descrição                                   |
| ------ | ------------------------------------------- |
| 201    | Pacote criado com sucesso.                  |
| 400    | Requisição inválida, pacote não foi criado. |

<div style="page-break-after: always;"></div>

### Alterar Pacote de Viagem
PUT `{baseurl}/pacotes/{pacoteId}` - Atualiza os dados de um pacote de viagem existente.

**Parâmetros:** `uuid : pacoteId` - Id do pacote a ser alterado - *obrigatório*

**Corpo do request (obrigatório)**:
Objeto do pacote com os dados atualizados.

exemplo:
```json
{
  "descricao": "nova descrição",
  "localidade": idLocalidade2,
  "itens": [
	  idTranlsadoAereo2,
	  idHospedagem,
	  idLocacaoVeiculo2
   ]
}
```

<div style="page-break-after: always;"></div>

**Responses:**

| Código | Descrição                      |
| ------ | ------------------------------ |
| 200    | Pacote atualizado com sucesso. |

*Corpo da response:*
```json
{
  "descricao": "lorem ipsum dolor",
  "localidade": {
    "descricao": "Rua dos Loucos"
  },
  "itens": [
    {
      "itemtype": "transladoAereo",
      "preco": 140.5,
      "companiaAerea": "Air France",
      "numeroVoo": "AF0002"
    },
    {
      "itemtype": "hospedagem",
      "preco": 140.5,
      "nomeHotel": "John Doe Hotel",
      "endereco": "Rua do Gab 123"
    },
    {
      "itemtype": "locacaoVeiculo",
      "preco": 134.5,
      "marca": "Ford",
      "modelo": "Ranger"
    }
  ]
}
```

| Código | Descrição                                   |
| ------ | ------------------------------------------- |
| 400    | Requisição inválida, pacote não atualizado. |
| 404    | Pacote não encontrado.                      |

<div style="page-break-after: always;"></div>

### Remover Pacote de viagem
DELETE `{baseurl}/pacotes/{pacoteId}` - Remove um pacote de viagem pelo seu ID.

**Parâmetros:** `uuid : pacoteId` - Id do pacote a ser removido - *obrigatório*

**Responses:**

| Código | Descrição                    |
| ------ | ---------------------------- |
| 204    | Pacote removido com sucesso. |
| 404    | Pacote não encontrado.       |

<div style="page-break-after: always;"></div>

## Schemas
### Pacote
```
id: uuid,
descrição: string,
localidade: Localidade,
itens: [{oneOf -> TransladoAereo, Hospedagem, LocacaoVeiculo}]
```
### Localidade
```
id: uuid,
descrição: string
```
### LocacaoVeiculo
```
id: uuid,
itemType: string,
preco: double,
marca: string,
modelo: string
```
### TransladoAereo
```
id: uuid,
itemType: string,
preco: double,
companiaAerea: string,
numeroVoo: string
```
### Hospedagem
```
id: uuid,
itemType: string,
preco: double,
nomeHotel: string,
endereco: string
```
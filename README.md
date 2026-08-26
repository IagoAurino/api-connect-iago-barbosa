# API Connect

## Objetivo da API
A API Connect foi desenvolvida como um sistema de back-end RESTful para gerenciar o cadastro de usuários. O projeto permite a criação, leitura, atualização e remoção (CRUD) de registros, utilizando uma estrutura de persistência em memória, com validação de dados para garantir a integridade das informações.

## Tecnologias Utilizadas
* **Node.js:** Ambiente de execução JavaScript.
* **Express:** Micro-framework para roteamento e requisições HTTP.
* **JavaScript:** Linguagem base da lógica de negócios.
* **Thunder Client:** Utilizado para testes de requisições estruturadas.

## Passo a Passo para Execução Local
Para rodar este projeto na sua máquina, siga os passos abaixo:

1. Clone o repositório:
   `git clone https://github.com/IagoAurino/api-connect-iago-barbosa.git`
2. Acesse a pasta do projeto:
   `cd api-connect-iago-barbosa`
3. Instale as dependências:
   `npm install`
4. Inicie o servidor:
   `node server.js`
5. A API estará rodando no endereço `http://localhost:3000`.

## Exemplos de Endpoints

### 1. Cadastrar Usuário (POST)
* **Rota:** `/api/usuarios`
* **Descrição:** Cria um novo usuário. Requer nome e e-mail obrigatoriamente.
* **Exemplo de Corpo (Body):**
  ```json
  {
    "nome": "Iago Barbosa",
    "email": "iago@teste.com",
    "cargo": "Desenvolvedor"
  }
  ```
* **Retorno de Sucesso:** `201 Created`

### 2. Listar Usuários (GET)
* **Rota:** `/api/usuarios`
* **Descrição:** Retorna a lista de todos os usuários cadastrados.
* **Retorno de Sucesso:** `200 OK`

### 3. Buscar Usuário Específico (GET)
* **Rota:** `/api/usuarios/:id`
* **Descrição:** Retorna os detalhes de um usuário com base no ID informado na URL.
* **Retorno de Sucesso:** `200 OK`
* **Retorno de Erro (Não encontrado):** `404 Not Found`

### 4. Atualizar Usuário (PUT)
* **Rota:** `/api/usuarios/:id`
* **Descrição:** Atualiza os dados de um usuário existente.
* **Retorno de Sucesso:** `200 OK`

### 5. Remover Usuário (DELETE)
* **Rota:** `/api/usuarios/:id`
* **Descrição:** Apaga o usuário correspondente ao ID informado.
* **Retorno de Sucesso:** `200 OK`

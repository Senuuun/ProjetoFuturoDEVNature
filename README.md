# Projeto de Áreas de Preservação

Este projeto é uma aplicação web desenvolvida em React para o gerenciamento e visualização de áreas de preservação. O sistema permite o cadastro, listagem e edição de áreas, além de exibir essas áreas em um mapa interativo.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **React Router**: Gerenciamento de rotas para navegação entre as páginas.
- **Leaflet**: Biblioteca para exibição de mapas.
- **Material-UI**: Biblioteca de componentes de interface de usuário.
- **LocalStorage**: Armazenamento local para persistência de dados sem backend.

## Funcionalidades

1. **Cadastro de Áreas**: Permite ao usuário cadastrar novas áreas de preservação com informações como nome, descrição, e coordenadas geográficas.
2. **Edição de Áreas**: Permite editar áreas existentes.
3. **Listagem de Áreas**: Exibe uma lista de todas as áreas cadastradas com a opção de editar cada uma.
4. **Mapa de Áreas**: Mostra as áreas cadastradas em um mapa interativo com marcadores personalizados.

## Instalação e Execução

Para executar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar o instalador em [nodejs.org](https://nodejs.org/).

### Passos para Execução

1. **Clone o Repositório**

    ```bash
    git clone https://github.com/Senuuun/ProjetoFuturoDEVNature.git
    ```

2. **Instale as Dependências**

    Navegue até o diretório do projeto e instale as dependências necessárias:

    ```bash
    cd meu-projeto
    npm install
    ```

3. **Inicie o Servidor de Desenvolvimento**

    Após instalar as dependências, inicie o servidor de desenvolvimento:

    ```bash
    npm start
    ```

    O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- **`src/`**: Contém o código-fonte da aplicação.
  - **`components/`**: Componentes reutilizáveis, como `Map.js` e `Menu.js`.
  - **`pages/`**: Páginas da aplicação, como `Dashboard.js`, `ListagemAreas.js`, e `CadastroEditarArea.js`.
  - **`App.js`**: Configuração das rotas da aplicação.
  - **`index.js`**: Ponto de entrada da aplicação.
- **`public/`**: Arquivos estáticos e o `index.html`.
- **`README.md`**: Este arquivo.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do projeto, crie uma branch para suas alterações e envie um pull request.

---

Para mais informações ou dúvidas, entre em contato com o autor do projeto.


## Informações

- **Criador**: Arthur Cechinel Nunes
- **FuturoDEV [Nature]
- **Módulo 2 - Projeto Avaliativo

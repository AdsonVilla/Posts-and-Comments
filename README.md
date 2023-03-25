# Teste-Frontend

O projeto trata de uma interface de um blog, o qual denominei ALKABlog, na qual seja possível observar os posts e, ao clicar em um post, seja exibido seus respectivos comentários.

## Tecnologias Utilizadas

- Vite: Utilizado para criação da estrutura de códigos de frameworks JavaScript
- React: Biblioteca JavaScript para criação de páginas dinâmicas e de fácil reutilização
- React Hooks: Para gerenciamento de estados
- JavaScript
- CSS: Foi escolhido o uso do CSS puro para demonstrar conhecimento da base
- npm: Utilizado para instalação de pacotes e dependências no projeto
- Jest: Implementado para futuros testes na aplicação
- Visual Studio Code (VS Code): Ambiente de desenvolvimento

## Instruções de como rodar o projeto

- Para a instalação do vite e react, pelo terminal do VS Code:
```
$ npm create vite@latest teste-frontend -- --template react
```
- Obs: As flags "teste-frontend -- --template react" facilitam a criação do projeto já com o nome e o framework/biblioteca que será usada

- Instalação do npm, pelo terminal:
```
$ npm install
```
- Rodando o projeto, pelo terminal:
```
$ npm run dev
```

## Pacotes baixados via npm
- React Router: Utilizado para criar rotas na aplicação e facilitar a navegação entre as páginas

```
$ npm install react-router-dom
```
- React Icons: Biblioteca de ícones para utilizar nos projetos

```
$ npm install react-icons --save
```
- Moment.js: Biblioteca para pegar a data atual e formatá-la do jeito desejado no projeto
```
$ npm install moment
```
- Jest: Framework de testes
```
$ npm install --save-dev jest @types/jest
```

## Links das APIs Utilizadas
- https://jsonplaceholder.typicode.com/posts
- https://jsonplaceholder.typicode.com/posts/[ID]/comments

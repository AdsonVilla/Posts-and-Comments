# Teste-Frontend

O projeto trata de uma interface de um blog, o qual denominei ALKABlog, na qual seja possível observar os posts e, ao clicar em um post, sejam exibidos seus respectivos comentários.

## Funcionalidades

Nomeado ALKABlog, a aplicação conta com duas páginas. A primeira, denominada Home, é a página onde são exibidos os posts. Nela, há uma navbar com opções para acessar as seções "Sobre nós" e "Entre em contato", na própria página. Há, também, um header contendo a data em que o usuário está acessando. Por apresentar uma quantidade considerável de posts, foi feita uma lógica para que fosse exibida uma quantidade limidade de posts, para que o usuário não precisasse passar por todos os posts para ver as outras seções da página, e um botão "ver mais", para que mais posts sejam mostrados. Observamos, ao final, um footer contendo um botão para retornar ao topo, sem que o usuário precise rolar por todos os posts.

Ao clicar em um post, o usuário é direcionado à página de comentários, a qual exibe os comentários exclusivos daquele post. Cada comentário possui um título, o email de quem enviou e o corpo. Nota-se, no header, a presença de um botão para retornar à página de posts e, ao final, o componente footer.

Vale ressaltar que a página se adapta aos tamanhos de tela.

## Tecnologias Utilizadas

- Vite: Utilizado para criação da estrutura de códigos de frameworks JavaScript
- React: Biblioteca JavaScript para criação de páginas dinâmicas e de fácil reutilização
- React Hooks: Para gerenciamento de estados
- JavaScript
- CSS: Foi escolhido o uso do CSS puro para demonstrar conhecimento da base
- npm: Utilizado para instalação de pacotes e dependências no projeto
- Jest: Implementado para futuros testes na aplicação
- Visual Studio Code (VS Code): Ambiente de desenvolvimento
- Design responsivo

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

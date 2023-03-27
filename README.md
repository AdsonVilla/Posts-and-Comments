# Teste-Frontend

O projeto trata de uma interface de um blog, na qual seja possível observar os posts e, ao clicar em um post, sejam exibidos seus respectivos comentários.

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

## Link do design base feito no Figma
- https://www.figma.com/file/OShKIIhPsFqcG0eQDFcSou/Blog---Desafio-Pr%C3%A1tico?node-id=0-1&t=4ThPLw3RmGK463j4-0

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

## Imagens da aplicação
- Página Home

![image](https://user-images.githubusercontent.com/105760278/227955980-50a26f11-099c-4244-82ae-a9ccf7e810cb.png)
![image](https://user-images.githubusercontent.com/105760278/227956144-9a67638b-6087-4faf-afe9-046647be60d2.png)
![image](https://user-images.githubusercontent.com/105760278/227956268-08670551-f61b-4096-b8b3-ccbd5a643284.png)
![image](https://user-images.githubusercontent.com/105760278/227956419-c4bbe30d-0d5f-420c-9d83-0bf879ddef79.png)
![image](https://user-images.githubusercontent.com/105760278/227956606-d8a689ad-5398-4f8a-98ef-1a8723231abe.png)

- Página Comments
![image](https://user-images.githubusercontent.com/105760278/227956808-e9e37db3-fbee-4059-9f0d-ea334fe61e8e.png)
![image](https://user-images.githubusercontent.com/105760278/227957087-42ca970e-1389-4f41-b105-32529a6baf93.png)
![image](https://user-images.githubusercontent.com/105760278/227957278-18d61e39-90fc-4ff2-9dd0-1914f92ed516.png)





![PostManager1](/snapshot/PostManager2.png)
<hr>

![PostManager2](/snapshot/PostManager1.png)

# PostManager

Aplicativo simples ReactJS com lógica de autenticação e criação de postagens, conectado a um backend Node.js (Express.js), auxiliado por um banco de dados MongoDB e hospedado na plataforma Heroku. A webApp pode ser acessada [aqui](https://nothingnothings.github.io/PostManager).


O aplicativo foi inicializado com create-react-app e implantado com GitHub Pages, assistido pela funcionalidade GitHub Actions.


A parte backend do aplicativo pode ser encontrada [aqui](https://github.com/nothingnothings/PostManager-Backend).


![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/nothingnothings/PostManager/master?style=flat-square)
[![en](https://img.shields.io/badge/lang-en-red.svg?style=flat-square)](https://github.com/nothingnothings/PostManager)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg?style=flat-square)](https://github.com/nothingnothings/PostManager/blob/master/README.pt-br.md)



## Tecnologias

Algumas das linguagens, bibliotecas e pacotes empregados:

- Node Package Manager (para inicialização e gerenciamento do aplicativo React)
- HTML5 (JSX)
- CSS3 (animações, Flexbox, consultas de mídia)
- ReactJS (biblioteca JavaScript, aplicativo construído inteiramente com componentes React; uso de "state" para gerenciar a validação de formulários, etc.)
- Lógica de validação de formulários (validação de entrada baseada em estado, lógica para adicionar e remover estilos "touched" e "invalid", etc.)
- Design responsivo para dispositivos móveis (sidebar, Flexbox, consultas de mídia)
- Bootstrap (principalmente o componente Footer)
- Font Awesome (ícones do componente Footer)
- MongoDB (solução de armazenamento de banco de dados noSQL; armazenamento de objetos `user` e `post` em coleções em um banco de dados remoto MongoDB Atlas)
- Uso da Fetch API (para a comunicação JSON, solicitações e respostas, entre o aplicativo frontend e o backend Node.js/express.js)
- Para o envio dos dados das postagens para o backend, `FormData()` e `FileReader()`; APIs/Objetos JavaScript usados para enviar solicitações HTTP multipart (strings/texto e imagens) para o backend Node.js, onde os dados JSON são separados dos dados de imagem (arquivos escolhidos pelo usuário), antes de serem tratados adequadamente

## Estrutura do Diretório do Projeto

O ambiente de desenvolvimento (com o uso da ferramenta/workflow `create-react-app`):, conforme visto na branch `master`:


```
.\
│
├── public\
│   ├── 404.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
│
├── src\
│   │
│   ├── components\
│   │   │
│   │   ├── Backdrop\
│   │   │   ├── Backdrop.css
│   │   │   └── Backdrop.js
│   │   │
│   │   ├── Button\
│   │   │   ├── Button.css
│   │   │   └── Button.js
│   │   │
│   │   ├── ErrorHandler\
│   │   │   └── ErrorHandler.js
│   │   │
│   │   ├── Feed\
│   │   │   │
│   │   │   └── Post\
│   │   │       ├── Post.css
│   │   │       └── Post.js
│   │   │
│   │   │
│   │   ├── Footer\
│   │   │   ├── Footer.css
│   │   │   └── Footer.js
│   │   │
│   │   ├── Form\
│   │   │   │
│   │   │   └── Input\
│   │   │       ├── FilePicker.js
│   │   │       ├── Input.css
│   │   │       └── Input.js
│   │   │
│   │   │
│   │   ├── Image\
│   │   │   ├── Avatar.css
│   │   │   ├── Avatar.js
│   │   │   ├── Image.css
│   │   │   └── Image.js
│   │   │
│   │   ├── Layout\
│   │   │   ├── Layout.css
│   │   │   └── Layout.js
│   │   │
│   │   ├── Loader\
│   │   │   ├── Loader.css
│   │   │   └── Loader.js
│   │   │
│   │   ├── Logo\
│   │   │   ├── Logo.css
│   │   │   └── Logo.js
│   │   │
│   │   ├── Modal\
│   │   │   ├── Modal.css
│   │   │   └── Modal.js
│   │   │
│   │   ├── Navigation\
│   │   │   │
│   │   │   ├── MainNavigation\
│   │   │   │   ├── MainNavigation.css
│   │   │   │   └── MainNavigation.js
│   │   │   │
│   │   │   ├── MobileNavigation\
│   │   │   │   ├── MobileNavigation.css
│   │   │   │   └── MobileNavigation.js
│   │   │   │
│   │   │   ├── MobileToggle\
│   │   │   │   ├── MobileToggle.css
│   │   │   │   └── MobileToggle.js
│   │   │   │
│   │   │   └── NavigationItems\
│   │   │       ├── NavigationItems.css
│   │   │       └── NavigationItems.js
│   │   │
│   │   │
│   │   ├── Paginator\
│   │   │   ├── Paginator.css
│   │   │   └── Paginator.js
│   │   │
│   │   ├── SinglePostPaginator\
│   │   │   ├── SinglePostPaginator.css
│   │   │   └── SinglePostPaginator.js
│   │   │
│   │   └── Toolbar\
│   │       ├── Toolbar.css
│   │       └── Toolbar.js
│   │
│   │
│   ├── pages\
│   │   │
│   │   ├── Auth\
│   │   │   ├── Auth.css
│   │   │   ├── Auth.js
│   │   │   ├── Login.css
│   │   │   └── Login.js
│   │   │
│   │   └── Feed\
│   │       │
│   │       ├── FeedEdit\
│   │       │   ├── FeedEdit.css
│   │       │   └── FeedEdit.js
│   │       │
│   │       ├── SinglePost\
│   │       │   ├── SinglePost.css
│   │       │   └── SinglePost.js
│   │       │
│   │       ├── Feed.css
│   │       └── Feed.js
│   │
│   │
│   ├── util\
│   │   ├── image.js
│   │   └── validators.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── package-lock.json
└── package.json
```

O output de produção do workflow do create-react-app, conforme mostrado na branch `gh-pages` (responsável pelo deploy do aplicativo):


```
.\
│
├── static\
│   │
│   ├── css\
│   │   ├── 1.b0103ddb.chunk.css
│   │   ├── 1.b0103ddb.chunk.css.map
│   │   ├── main.176757f9.chunk.css
│   │   └── main.176757f9.chunk.css.map
│   │
│   └── js\
│       ├── 1.ab771bf3.chunk.js
│       ├── 1.ab771bf3.chunk.js.map
│       ├── main.8ad88ea1.chunk.js
│       ├── main.8ad88ea1.chunk.js.map
│       ├── runtime~main.720003f3.js
│       └── runtime~main.720003f3.js.map
│
│
├── .nojekyll
├── 404.html
├── logo192.png
├── logo512.png
├── apple-touch-icon.png
├── asset-manifest.json
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── index.html
├── manifest.json
├── precache-manifest.b9da06879698db9688cbb05c98f3fb50.js
└── service-worker.js
```

## Arquivos de Configuração do Webpack e package.json

O arquivo package.json usado no projeto:

```
{
  "name": "post-manager",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://nothingnothings.github.io/PostManager",
  "dependencies": {
    "@fortawesome/free-regular-svg-icons": "^6.1.1",
    "@fortawesome/free-solid-svg-icons": "^6.1.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@types/react-fontawesome": "^1.6.5",
    "bootstrap": "^5.1.3",
    "react": "^16.5.2",
    "react-bootstrap": "^2.4.0",
    "react-dom": "^16.5.2",
    "react-router-dom": "^4.3.1",
    "react-scripts": "2.0.4",
    "react-transition-group": "^4.4.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ],
  "devDependencies": {
    "gh-pages": "^4.0.0"
  }
}


```

## Configuração

Para usar este projeto, clone-o usando o Git:

1. Execute `git clone` para clonar o projeto em seu repositório Git local.
2. Execute `npm install` para instalar todas as dependências (`react`, `axios`, etc).
3. Execute `npm run build` para criar a versão de produção/implantação do aplicativo (output em `/build`).
4. Sirva os arquivos de produção localmente ou na web, com a ajuda de um provedor de hospedagem (embora grande parte do aplicativo dependa dos dados do backend, que, neste caso, é servido por um servidor Node.js (Express.js), hospedado no Heroku).
5. Para fins desta demonstração, na página inicial, insira as credenciais `exemplo@exemplo.com` (email) e `exemplo` (senha) para acessar as funcionalidades do aplicativo (visualização e criação de postagens).


## Destaques

- Aplicativo de Página Única, sem recarregamentos de página arquivo HTML único (ReactJS).
- Aplicativo dividido em diversos componentes, dos quais alguns são usados mais de uma vez, em diferentes páginas (filosofia de design ReactJS).
- Lógica de validação de formulários, na página inicial, integrada com a lógica de state management do ReactJS.
- Design responsivo (adaptável, suporte a dispositivos móveis e desktops) criado com Flexbox e media queries.
- Uso do GitHub Actions e GitHub Pages com a ferramenta `create-react-app` para um workflow contínuo (transição da fase de desenvolvimento para a fase de produção/implantação). Após o comando git push, o GitHub Actions transfere o conteúdo da branch master para a branch gh-pages, que então realiza o deploy do aplicativo em https://nothingnothings.github.io/PostManager.
- Adição/remoção de classes CSS (animação "fadeEnter"), implementada com `react-transition-group`.
- Para fins de demonstração de implantação, apenas um único usuário foi/é habilitado/criado no lado do servidor, com as credenciais `exemplo@exemplo.com` (campo de email) e `exemplo` (campo de senha). Além disso, os "Posts" feitos pelo usuário são redefinidos a cada hora (recurso "Scheduled Trigger" do MongoDB).
- Favicon personalizado, compatível com múltiplos dispositivos.
- Lógica de paginação simples para a lista de postagens (Botões "Next" e "Previous").
- Uso da API `fetch()` para comunicação com o backend Node.js (Express.js), que gerencia os objetos "Usuário" e "Postagem", armazenados em um banco de dados MongoDB (serviço MongoDB Atlas); o servidor Node.js e o banco de dados MongoDB também lidam com a lógica de autenticação (login) implementada no aplicativo.

## Inspiração

Inspirado pelos cursos "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)" e "React - The Complete Guide (incl Hooks, React Router, Redux)" de Maximilian Schwarzmüller.



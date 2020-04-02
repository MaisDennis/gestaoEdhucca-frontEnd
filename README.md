# Gestão Edhucca Front-end || 01 de abril, 2020

##  1.  Conceitos abordados

##  2.  Descrição do projeto

##  3.  Iniciando o projeto

##  4.  Criando o Projeto

1.  Criando o projeto do zero.
    1.  yarn create react-app modulo05
    2.  cd modulo05 -> code .
    3.  .editorconfig
    4.  yarn add eslint -D
    5.  yarn eslint --init
    6.  yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
    7.  configurar .eslintrc.js
    8.  Criar .prettierrc

2.  Ajustes na API
    1.  yarn add cors no back-end.
    2.  src/app.js
        1.  import cors from 'cors';
        2.  adicione cors no middlewares.
            1.  this.server.use(cors());

3.  Configurando Rotas
    1.  yarn add react-router-dom
    2.  Criar as pastas src/pages e src/routes/index.js e src/services/history.js
    3.  Criar pages/Dashboard/index.js, Profile/index.js, SignIn/index.js e SignUp/index.js
    4.  routes/index.js
    5.  src/App.js
    6.  yarn add history
    7.  src/services/history.js

4.  Configurando Reactotron
    1.  yarn add reactotron-react-js
    2.  Criar src/config/ReactotronConfig.js
    3.  src/App.js -> import './config/ReactotronConfig';

5.  Rotas privadas
    1.  pages/SignIn/index.js
    2.  Criar routes/Route.js -> import { Route, Redirect } from 'react-router-dom';
    3.  yarn add prop-types

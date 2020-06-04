const express = require('express'); /* recuperando o pacote express */
const bodyParser = require('body-parser'); /* recuperando o body-parser */
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');

//Criando/Invocando a Api/Server Web do Express
const app = express(); /* criação do app */


// Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//configuraando a conexão com o banco de dados
mongoose.connect(variables.DATABASE.connection, { useNewUrlParser: true });



//Configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter); 
app.use('/api/usuario', usuarioRouter); 
//Nesse ponto é possível validar no browser que a rota esta definida..localhost:3000/api/categoria

//Exportando a Api
module.exports = app;  // exportando os modulos para ser utilizado em todo o projeto 'externalizar'


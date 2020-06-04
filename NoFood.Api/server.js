'use strict' // serve para segregação de os pacotes que são utilizados por classes

const app = require('../NoFood.Api/bin/express'); //busca do arquivo de configuração do express (bin)
const variables = require('../NoFood.Api/bin/configuration/variables');

app.listen(variables.Api.port, ()=> { //função callback/assíncrona
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`); // o uso do ${} serve para concatenar
});























//Para consulta....anotações até a aula 8

// const express = require('express');
// const bodyParser = require('body-parser'); /* importação de body-parser */
// const app = express();

// app.use(bodyParser.json()); /* realiza o metodo parser em relação ao json */
// app.use(bodyParser.urlencoded({extended: false}));

/*READ app.get('/',(req, res) => {res.status(200).send('Olá Mundo!!!'); });*/

/*CREATEapp.post('/', (requisicao, resposta) => {resposta.status(201).send('Criado'); });*/ 

/*UPDATEapp.put('/', (req, res) => { res.status(202).send('Atualizado'); });*/

/*DELETEapp.delete('', (req, res) => { res.status(204).send('Registro Deletado'); });*/

/* Para que seja possível inserir no Postman um objeto do tipo pessoa utilizando json, faz-se necessário 
instalar uma dependência do express no qual fará a conversão do tipo parse (npm install body-parser --save). 
Após instalada esta dependência deverá ser importada para aplicação e é possível configura-la */

/*Para que a cada interação o servidor aplice atualização, realizar a instalação do nodemon (npm install -g nodemon)
para executar basta declarar no cmd nodemon server*/


// let pessoas = []; /* Lista de pessoas */

//*READ*/ app.get ('/',(req, res) => {

//     res.status(200).send(pessoas); /*retornando uma lista de pessoas*/

//});

//*CREATE*/ app.post('/', (requisicao, resposta) => {
 //   console.log('Corpo:', requisicao.body); /* Serve para validar o valor recebido   */
 //   pessoas.push(requisicao.body); /*o corpo da requisição conterá as informações necessárias*/
 //   resposta.status(201).send(requisicao.body); /*retorna oque foi recebido - possibilidade de processamento antes do retorno*/
//}); 

//*UPDATE*/ app.put('/:id', (req, res) => { /*:id serve para receber o id que será enviado pela rota da api*/
    
 //   let pessoaEncontrada = pessoas.filter(pes => { return pes.id == req.params.id}); /* serve para selecionar a pessoa encontrada */
 //   pessoaEncontrada = req.body; /* pegar as informações do id encontrado */

 //   res.status(202).send(pessoaEncontrada); /* retorna a atualização da pessoa */ 
//});

//*DELETE*/ app.delete('/:id', (req, res) => { 

 //   for (var index = 0; index < pessoas.length; index++) { /* varrerá a lista de pessoas */
 //       var pessoa = pessoas[index]; /* recebrá o indice da pessoa vindo do for */
 //       if(pessoa.id == req.param.id){ /* irá comparar se o id corresponde ao informado */
 //           pessoas.splice(index, 1); /* excluirá a posição dentro do array */
 //       }
 //   }


 //   res.status(204).send();
// });


// app.listen(3000, () => {
//    console.log('Servidor Api Nofood iniciado na porta 3000.')
//});

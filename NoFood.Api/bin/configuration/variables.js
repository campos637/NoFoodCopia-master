const variables = { // Objeto JavaScript
    Api: { // Criando um grupamento
       port: process.env.port || 3000
    },

    DATABASE : {
        connection: process.env.connection || 'mongodb+srv://nofoodadmin:nofoodadmin@nofood-sasvk.mongodb.net/test?retryWrites=true&w=majority'
    },
    
    Security: {
        secretyKey: 'd41d8cd98f00b204e9800998ecf8427e|7aef61337bcee2fe773aa78b40afacbc'
    }

}

module.exports = variables;

// variavel que iniciará com o projeto em relação a porta o || significa ou..
// sendo assim a declaração process.env.port busca a porta previamente configurada no 
// ambiente aonde será executado. Caso não localizado, a aplicação utilizará a porta 3000


'use strict'

const mongoose = require('mongoose'); //importação do mongose *validar o termo se dará erro
const schema = mongoose.Schema; //importação do schema

// criação da usuario Model

const usuarioModel = new schema({
    nome: { type: String, required: true, trim: true, index: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    foto: { type: String },
    ativo: { type: Boolean, required: true, default: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

usuarioModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

//1 -> trim: anula espaços no começo e fim - campo indexado - required obriga o preenchimento

module.exports = mongoose.model('Usuario', usuarioModel);
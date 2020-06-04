'use strict'

const mongoose = require('mongoose'); //importação do mongose *validar o termo se dará erro
const schema = mongoose.Schema; //importação do schema

// criação da categoria Model

const categoriaModel = new schema({
    titulo: { trim: true, index: true, required: true, type: String },
    descricao: { type: String },
    foto: { type: String },
    ativa: { type: Boolean, required: true, default: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

categoriaModel.pre('save', next => { // executa antes de salvar
    let agora = new Date ();
    if (!this.dataCriacao)
    this.dataCriacao = agora;
    next(); // prossegue com o salvamento
});

//1 -> trim: anula espaços no começo e fim - campo indexado - required obriga o preenchimento

module.exports = mongoose.model('Categoria', categoriaModel);
'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller');
const auth = require('../middlewares/authentication');

let _ctrl = new controller(); //criando a clase que será utilizada

//Rota publica
router.post('/autenticar', _ctrl.autenticar);
router.post('/register', _ctrl.post);

//Requer autenticação por token
router.get('/', auth, _ctrl.get);/*Para todos registros*/
router.get('/', auth, _ctrl.getById);/*Para um registro*/
router.post('/', auth, _ctrl.post);/* / informa que esta executando na raiz da Api*/
router.put('/:id', auth, _ctrl.put);
router.delete('/:id', auth, _ctrl.delete);

module.exports = router;


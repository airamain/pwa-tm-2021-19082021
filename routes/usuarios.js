// Rutas para crear USUARIOS

const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');
const { check } = require('express-validator');
//api/usuarios
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agregar un email valido').isEmail(),
        check('password', 'El password debe contener mínimo 6 caracteres').isLength({min : 6}),
    ],
    usuarioController.crearUsuario
)

module.exports = router;
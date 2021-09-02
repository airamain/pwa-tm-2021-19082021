// Rutas para crear USUARIOS

const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

//api/usuarios
router.post('/',
    usuarioController.crearUsuario
)

module.exports = router;
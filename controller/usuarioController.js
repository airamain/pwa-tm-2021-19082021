const usuario = require('../models/usuario');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');



exports.crearUsuario = async (req, res) => {
    console.log("body =>: ", req.body);
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errores: error.array() })
        }
        const {email, password} = req.body;
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ message: "El usuario ya esta registrado"})
        }
        usuario = new Usuario(req.body);
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);
        await usuario.save()
        res.send("Usuario guardado")
    } catch (error) {
        console.log(error)
        res.status(400).send("error al guardar")
    }
}
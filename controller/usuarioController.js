const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
require('dotenv').config({ path: 'variables.env' });

// implementar jsonwebtoken
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) => {
    // vamos a extraer email y password - ok
    // validar que el usuario registrado sea unico - ok
    // para validad utilizaremos findOne(), buscamos un registro unico -ok
    // retornar una respuesta desde nuestra API si es o no verdadera la validacion -ok

    // con el dato del password, vamos a encriptarlo o hashearlo con "npm i bcryptjs "
    //--------------------------//

    // aplicamos express-validator 
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ errores: error.array() })
    }

    try {
        const { email, password } = req.body;

        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({ message: 'El Usuario ya esta registrado' })
        }

        usuario = new Usuario(req.body);
        // hashear password, antes hacer un salt
        const salt = await bcryptjs.genSalt(10)

        // reescribir nuestro password
        usuario.password = await bcryptjs.hash(password, salt);

        await usuario.save();

        // Crear y Firmar jsonwebtoken
        const payload = {
            usuario: {
                id: usuario.id
            }
        };

        // firmar
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 // una hora
        }, (error, token) => {
            if (error) throw error;
            res.json({ token: token });
        })

    } catch (error) {
        console.log(error)
        res.status(400).send("error al guardar")
    }
}
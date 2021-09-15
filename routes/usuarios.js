const express = require('express')
const router = express.Router();
const sha1 = require('sha1');
const models = require('../models/proveedores')

const get = (req, res) => {
    models.getAll().then((response) => {res.status(200).json(response)}).catch((err) =>res.status(500).json(err));//esto es un oneliner --> con then hace el async await automatico, pero cuando tengamos un INSERT vamos a hacerlo con try catch,  
}

const update = (req, res) => {
models.update(req.params.id, req.body).then((response) =>{res.status(200).json(response)}).catch((err) =>res.status(500).json(err))
}

const del = (req, res) => {
    model.update(req.params.id,{eliminado:true}).then((response) => {res.status(200).json(response)}).catch((err) =>res.status(500).json(err));
}

const single = (req, res) => {
    models.single(req.params.id).then((response) => {res.status(200).json(response)}).catch((err)=>res.status(500).json(err))
}

const create = (req, res) => {
    const usuario = req.body
    const usuarioCrear = {
        Nombre: usuario.Nombre,
        Mail: usuario.mail,
        Pass: sha1(usuario.pass),
        Telefono: usuario.telefono
    }
    models.create(usuarioCrear).then((response) => {res.status(200).json(response)}).catch((err) =>res.status(500).json(err))
}//en models.create pongo usuarioCrear porque los datos que se ingresan ahi se van a postear a la base

const login = (req, res) => {
    const {Nombre, pass} = req.body
    const usuarioCrear = {
        pass: sha1(pass)
    }
    models.validation(Nombre, usuarioCrear.pass).then((response) => {res.status(200).json(response)}).catch((err) =>res.status(500).json(err))
}//se pone en el parentesis el nombre y usuarioCrear.pass para poder verificar esos dos parametros

router.get('/single/:id', single)
router.post('/update/:id', update)
router.post('/create/', create)
router.post('/delete/:id', del)
router.get('/', get)
router.get('/login/', login)
module.exports = router

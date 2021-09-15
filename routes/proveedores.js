const express = require('express');
const router = express.Router();
const models = require('../models/proveedores')

const get = (req, res) => {
    models.getAll().then((response) => {res.status(200).json(response)}).catch((err) =>res.status(500).json(err));//esto es un oneliner --> con then hace el async await automatico, pero cuando tengamos un INSERT vamos a hacerlo con try catch,  
}

const update = (req, res) => {
models.update(req.params.id, req.body).then((response) =>{res.status(200).json(response)}).catch((err) =>res.status(500).json(err))
}

const del = (req, res) => {
models.del(req.params.id).then((response) => {res.status(200).json(response)}).catch((err)=>res.status(500).json(err))
}

const single = (req, res) => {
models.single(req.params.id).then((response) => {res.status(200).json(response)}).catch((err)=>res.status(500).json(err))
}

const create = (req, res) => {
models.create(req.body).then((response) => {res.status(200).json(response)}).catch((err) =>res.status(500).json(err))
}

router.get('/single/:id', single)
router.post('/update/:id', update)
router.post('/create/', create)
router.post('/del/:id', del)
router.get('/', get)
module.exports = router
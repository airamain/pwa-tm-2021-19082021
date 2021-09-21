const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey = fs.readFileSync('./keys/private.pem');

const jwtOptions = { algorithm:'RS256', expiresIn:'5h' };


const login = (req, res) => {
    const token = jwt.sign({id: 1, username: 'leomessi'}, privateKey, jwtOptions); //me genera el token
    res.status(200).json({JWT: token})
}

router.post('/', login);

module.exports = router;
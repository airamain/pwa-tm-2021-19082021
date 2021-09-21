const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey = fs.readFileSync('./keys/private.pem');
const model = require('./../models/auth');
const sha1 = require('sha1');
const jwtOptions = { algorithm:'RS256', expiresIn:'5h' };


const login = async (req, res) => {
    try{
    const {username, pass} = req.body;
    const [user] = await model.login(username, sha1(pass));
    !user ? res.sendStatus(401) : null;
    const payload = {id: user.id};
    const token = jwt.sign(payload, privateKey, jwtOptions); //me genera el token
    res.status(200).json({JWT: token, data: {user}});
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

router.post('/', login);

module.exports = router;
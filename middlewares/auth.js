const fs = require('fs');
const publicKey = fs.readFileSync('./keys/public.pem');
const jwt = require('jsonwebtoken');

const logged = (req, res, next) => {
    try {
        const {authorization} = req.headers;
        console.log(authorization);
        const {id} = jwt.verify(authorization, publicKey);
        console.log(id);
        req.id = id;
        next();
    } catch (error) {
        console.log(error);
        res.sendStatus(401);
    }
};

module.exports = {logged}
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`HOLA MUNDO
    `);

});


module.exports = router;
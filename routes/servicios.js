const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`HOLA SERVICIOS
    `);

});


router.put('/:id', (req, res) => {
    const params = req.params.id;
    res.send(`PUT de SERVICIOS id: ${params}`)


});

module.exports = router;
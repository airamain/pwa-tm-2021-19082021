const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: 'string',
        require: true,
        trim: true
    },
    email: {
        type: 'string',
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: 'string',
        require: true,
        trim: true,
    },
    registo: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Usuario', usuarioSchema);
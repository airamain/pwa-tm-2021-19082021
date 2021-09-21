const bd = require('./../utils/bd');

const login = (username, pass) => bd('usuarios')
.where({username, pass})
.select('id');
// consulta a la base me devuelve un [] si la consulta devuelve vacia se devuelve un []

module.exports = {login};
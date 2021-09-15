const bd = require('../utils/bd');

const getAll = () => bd('usuarios').select();

const single = (id_usuario) => bd('usuarios').where({'id_usuario': id_usuario, 'eliminado': false, 'habilitado': true})//false es 0
.select('Nombre','mail', 'telefono','direccion');

const update = (id_usuario, obj) => bd('usuarios').where({'id_usuario': id_usuario}).update(obj);

const del = (id_usuario, obj) => bd('usuarios').where({'id_usuario': id_usuario}).update(obj);

const create = (obj) => bd('usuarios').insert(obj);

const validation = (Nombre, pass) => bd('usuarios').where({ 'Nombre': Nombre, 'pass': pass }).select();

module.exports = {getAll, update, single, del, create, validation}
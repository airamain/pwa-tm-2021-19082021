const bd = require('../utils/bd');

const getAll = () => bd('productos').select();

const single = (id) => bd('productos').where({'id': id, 'eliminado': false})
.select('nombre','precio', 'stock','id_proveedor');//false es 0

const update = (id, obj) => bd('productos').where({'id': id}).update(obj);

const del = (id, obj) => bd('productos').where({'id': id}).update(obj);

const create = (obj) => bd('productos').insert(obj);

module.exports = {getAll, update, single, del, create}

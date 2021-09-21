const bd = require('./../utils/bd');

const getAll = () => bd('productos').select();

const create = (obj) => bd('productos').insert(obj);

const single = (id) => bd('productos')
.where({'id': id, 'eliminado': false})
.select('nombre', 'precio', 'stock', 'id_proveedor');

const update = (id, obj) => bd('productos')
.where({'id': id})
.update(obj);

module.exports = {getAll, create, single, update};
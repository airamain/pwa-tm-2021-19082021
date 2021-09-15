const bd = require('../utils/bd');

const getAll = () => bd('proveedores').select();

const single = (id_proveedor) => bd('proveedores').where({'id_proveedor': id_proveedor, 'habilitado': true}).select('id_proveedor', 'mail', 'nombre');

const update = (id_proveedor, obj) => bd('proveedores').where({'id_proveedor': id_proveedor}).update(obj)

const del = (id_proveedor, obj) => bd('proveedores').where({'id_proveedor': id_proveedor}).update(obj)

const create = (id_proveedor, obj) => bd('proveedores').where({'id_proveedor': id_proveedor}).insert(obj)

module.exports = {getAll, update, del, create, single}
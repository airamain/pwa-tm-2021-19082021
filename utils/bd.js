//llamamos a knex
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',//localhost:
      pool: {min: 1, max:10},
      user : 'root',
      password : '',
      database : 'pwa-2021-2cm'
    }
  });

module.exports = knex;
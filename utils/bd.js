const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pwa-2021-2cm',
        pool: { min:1, max:10 }
    }
});

module.exports = knex;
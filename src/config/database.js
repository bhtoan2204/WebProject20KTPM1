const Sequelize = require('sequelize');

module.exports = new Sequelize({
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    username: 'bookstoreadmin',
    password: 'admin',
    database: 'bookstore',
    logging: console.log
});
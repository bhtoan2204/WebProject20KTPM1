const Sequelize = require('sequelize');
const operatorsAliases = require('./operatorAlias');

module.exports = new Sequelize(process.env.POSTGRESQL_URI, {
    dialectOptions: {
        ssl: true,
        rejectUnauthorized: false
    },
    operatorsAliases: operatorsAliases
});
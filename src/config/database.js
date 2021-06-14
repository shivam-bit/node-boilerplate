const Sequelize = require('sequelize');

const sequelize = new Sequelize('URL_shortener', 'root', 'shivam@12999', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;


const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql', // Que db vamos a usar
  logging: console.log, // Para ver las consultas que se hacen
});

setupModels(sequelize);
sequelize.sync(); // Para que se cree la estructura de la db

module.exports = sequelize;

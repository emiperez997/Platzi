const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgress://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  //dialect: 'mysql', // Que db vamos a usar
	dialect: 'postgres',
  logging: console.log, // Para ver las consultas que se hacen
});

setupModels(sequelize);
// sequelize.sync(); // Para que se cree la estructura de la db. No es recomendado para producción

module.exports = sequelize;

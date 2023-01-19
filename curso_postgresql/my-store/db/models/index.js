// Se importan los modelos
const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./product.model');

// Definimos los modelos
const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;

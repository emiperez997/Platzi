const { Model, DataTypes, Sequelize } = require('sequelize');

// Definimos la tabla
const PRODUCT_TABLE = 'products';

// Schema
const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,

  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

// Este modelo tiene las formas en las que vamos a hacer querys
class Product extends Model {
  // static -> Para acceder sin instanciar
  static associate() {
    // models
  }

  static config(sequelize) {
    return {
      sequelize, // Conexion
      tableName: PRODUCT_TABLE, // Nombre de la tabla
      modelName: 'Product', // Nombre del modelo
      timestamps: false, // Para que no se cree el campo updatedAt
    };
  }
} 

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product
};

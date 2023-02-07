const { Model, DataTypes, Sequelize } = require('sequelize');

// Definimos la tabla
const USER_TABLE = 'users';

// Schema
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
	role: {
		allowNull: false,
		type: DataTypes.STRING,
		defaultValue: 'customer'
	},
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

// Este modelo tiene las formas en las que vamos a hacer querys
class User extends Model {
  // static -> Para acceder sin instanciar
  static associate() {
    // models
  }

  static config(sequelize) {
    return {
      sequelize, // Conexion
      tableName: USER_TABLE, // Nombre de la tabla
      modelName: 'User', // Nombre del modelo
      timestamps: false, // Para que no se cree el campo updatedAt
    };
  }
} 

module.exports = {
  USER_TABLE,
  UserSchema,
  User
};

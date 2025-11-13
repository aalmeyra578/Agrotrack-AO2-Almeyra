import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

export const Contacto = sequelize.define('Contacto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true }
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'contactos',
  timestamps: false
});

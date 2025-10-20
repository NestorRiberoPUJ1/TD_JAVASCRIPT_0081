const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Computer = sequelize.define('Computer', {

    id:{
        type: DataTypes.INTEGER, // Tipo de dato entero
        primaryKey: true, // Llave primaria
        autoIncrement: true // Incremento automático
    },
    marca:{
        type: DataTypes.STRING, // Tipo de dato cadena
        allowNull: false, // No permite valores nulos (obligatorio)
    },
    procesador:{
        type: DataTypes.STRING, // Tipo de dato cadena
        allowNull: false, // No permite valores nulos (obligatorio)
    },
    modelo:{
        type: DataTypes.STRING, // Tipo de dato cadena
        allowNull: false, // No permite valores nulos (obligatorio)
    },
    ram:{
        type: DataTypes.INTEGER, // Tipo de dato entero
        allowNull: false, // No permite valores nulos (obligatorio)
    },

});

module.exports = Computer;

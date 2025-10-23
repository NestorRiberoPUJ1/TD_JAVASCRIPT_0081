const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const ProductSerial = sequelize.define('productSerial', {

    id:{
        type: DataTypes.INTEGER, // Tipo de dato entero
        primaryKey: true, // Llave primaria
        autoIncrement: true // Incremento automático
    },
    serialNumber:{
        type: DataTypes.STRING, // Tipo de dato cadena
        allowNull: false, // No permite valores nulos (obligatorio)
        unique: true // Número de serie único
    },
});

module.exports = ProductSerial;

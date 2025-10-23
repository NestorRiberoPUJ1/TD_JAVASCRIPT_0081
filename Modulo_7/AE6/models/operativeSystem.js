const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OperativeSystem = sequelize.define('operativeSystem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = OperativeSystem;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Software = sequelize.define('software', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Software;
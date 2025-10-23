


//RELACIONES

const Computer = require("./computer");
const ProductSerial = require("./productSerial");
const OperativeSystem = require("./operativeSystem");
const Software = require("./software");

/* 1:1 entre Computer y ProductSerial */
// .tipoDeRelacion(ModeloRelacionado, {as: 'alias', foreignKey: 'llaveForaneaUtilizadaEnLaOtraTabla',})
Computer.hasOne(ProductSerial, {as: 'productSerial', foreignKey: 'computerId'}); 
// .tipoDeRelacion(ModeloRelacionado, {as: 'alias', foreignKey: 'llaveForanea', targetKey: 'llaveObjetivo'})
ProductSerial.belongsTo(Computer, {as: 'computer', foreignKey: 'computerId', targetKey: 'id'});


/* 1:N entre ProductSerial y OperativeSystem*/
// .tipoDeRelacion(ModeloRelacionado, {as: 'alias', foreignKey: 'llaveForaneaUtilizadaEnLaOtraTabla',})
OperativeSystem.hasMany(ProductSerial, {as: 'productSerials', foreignKey: 'operativeSystemId'});
// .tipoDeRelacion(ModeloRelacionado, {as: 'alias', foreignKey: 'llaveForanea', targetKey: 'llaveObjetivo'})
ProductSerial.belongsTo(OperativeSystem, {as: 'operativeSystem', foreignKey: 'operativeSystemId', targetKey: 'id'});


/* N:M entre Software y Computer */
// .tipoDeRelacion(ModeloRelacionado, { through: 'tablaIntermedia', as: 'alias', foreignKey: 'llaveForaneaUtilizadaEnLaTablaIntermedia'})
Computer.belongsToMany(Software, { through: 'computerSoftware', as: 'softwares', foreignKey: 'computerId' });
// .tipoDeRelacion(ModeloRelacionado, { through: 'tablaIntermedia', as: 'alias', foreignKey: 'llaveForaneaUtilizadaEnLaTablaIntermedia'})
Software.belongsToMany(Computer, { through: 'computerSoftware', as: 'computers', foreignKey: 'softwareId' });

module.exports = {
    Computer,
    ProductSerial,
    OperativeSystem,
    Software
};



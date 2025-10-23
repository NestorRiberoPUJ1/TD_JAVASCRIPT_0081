const {ProductSerial,Computer} = require('../models/tables');

const createProductSerialSeeds = async () => {
    await ProductSerial.bulkCreate([
        {
            serialNumber: 'SN123456789',
            /* computerId: 1, */
            operativeSystemId: 1
        },
        {
            serialNumber: 'SN987654321',
            /* computerId: 2, */
            operativeSystemId: 2
        },
        {
            serialNumber: 'SN567890123',
            /* computerId: 3, */
            operativeSystemId: 1
        },
    ]);

    // Obtener las instancias de Computer para asociarlas
    const Dell = await Computer.findByPk(1);
    const Mac = await Computer.findByPk(2);
    const HP = await Computer.findByPk(3);

    // Obtener las instancias de ProductSerial para asociarlas
    const serial1 = await ProductSerial.findOne({ where: { serialNumber: 'SN123456789' } });
    const serial2 = await ProductSerial.findOne({ where: { serialNumber: 'SN987654321' } });
    const serial3 = await ProductSerial.findOne({ where: { serialNumber: 'SN567890123' } });

    // Desde un computador, asignar número de serie
    await Dell.setProductSerial(serial1); // setModeloRelacion(instanciaRelacionada)
    await Mac.setProductSerial(serial2); // setModeloRelacion(instanciaRelacionada)    

    // Desde un número de serie, asignar computador
    await serial3.setComputer(HP); // setModeloRelacion(instanciaRelacionada)

};

module.exports = createProductSerialSeeds;
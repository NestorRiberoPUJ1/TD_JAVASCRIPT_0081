const {Software,Computer}= require('../models/tables');


const createSoftwareSeeds = async () => {
    await Software.bulkCreate([
        {
            name: 'VS Code',
        },
        {
            name: 'Autodesk Inventor',
        },
        {
            name: 'Matlab',
        },
        {
            name: 'Texas Instruments Tina-TI',
        },
    ]);
   
    // Obtener las instancias de Software para asociarlas
    const VsCode = await Software.findOne({ where: { name: 'VS Code' } });
    const AutodeskInventor = await Software.findOne({ where: { name: 'Autodesk Inventor' } });
    const Matlab = await Software.findOne({ where: { name: 'Matlab' } });
    const TinaTI = await Software.findOne({ where: { name: 'Texas Instruments Tina-TI' } });

    // Obtener las instancias de Computer para asociarlas
    const Dell = await Computer.findByPk(1);
    const Mac = await Computer.findByPk(2);
    const HP = await Computer.findByPk(3);
    

    // Desde un computador, agregar software
    await Dell.addSoftwares([VsCode, AutodeskInventor]); // Agregar múltiples software a Dell
    await Mac.addSoftware(Matlab); // Agregar un solo software a Mac
    await Mac.addSoftware(VsCode); // Agregar otro software a Mac

    // Desde un software, agregar computadoras
    await TinaTI.addComputer(HP); // Agregar HP al software Tina-TI
    await Matlab.addComputer(HP); // Agregar HP al software Matlab
};

module.exports = createSoftwareSeeds;
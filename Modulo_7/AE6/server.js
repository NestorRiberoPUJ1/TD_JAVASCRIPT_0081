const sequelize = require('./config/db');
const { createComputer, getAllComputers, getComputerById, updateComputer, deleteComputer } = require('./controllers/computer.controllers');
const { ProductSerial, OperativeSystem, Software, Computer } = require('./models/tables');
const createComputerSeeds = require('./seeders/computer.seeder');
const createOperativeSystemSeeds = require('./seeders/operativeSystem.seeder');
const createProductSerialSeeds = require('./seeders/producSerial.seeder');
const createSoftwareSeeds = require('./seeders/software.seeder');



const main = async () => {
    try {
        await sequelize.sync({ force: true, alter: true });

        await createOperativeSystemSeeds(); // Crear semillas de sistemas operativos
        await createComputerSeeds(); // Crear semillas de computadoras
        await createProductSerialSeeds(); // Crear semillas de números de serie
        await createSoftwareSeeds(); // Crear semillas de software

        const windows = await OperativeSystem.findOne({
            where: { name: 'Windows' },
        });
        console.log(windows);

        const serialesWindows = await windows.getProductSerials();
        console.log(serialesWindows);

        const macbook = await Computer.findOne({ where: { modelo: 'MacBook Pro' } });
        console.log(macbook);
        const softwaresMacbook = await macbook.getSoftwares();
        console.log(softwaresMacbook);

        return;
    } catch (error) {
        console.error('Error al sincronizar los modelos:', error);
    }
}

main();
const sequelize = require('./config/db');
const { createComputer, getAllComputers, getComputerById, updateComputer, deleteComputer } = require('./controllers/computer.controllers');


const main = async () => {
    try {
        await sequelize.sync({ /* force: true, alter: true  */});
        console.log('Todos los modelos fueron sincronizados correctamente.');
        const result= await createComputer({
            marca: 'Dell',
            procesador: 'Intel i5',
            modelo: 'Inspiron 15',
            ram: 16
        });
        console.log(result);
        console.log('Computadora de prueba creada.');
        console.log(await getAllComputers());
        console.log(await getComputerById(1));
        console.log(await updateComputer(1, { ram: 32 }));
        console.log(await deleteComputer(2));

    } catch (error) {
        console.error('Error al sincronizar los modelos:', error);
    }
}

main();
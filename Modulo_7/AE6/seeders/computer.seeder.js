const { Computer } = require('../models/tables');

const createComputerSeeds = async () => {
    await Computer.bulkCreate([
        {
            marca: 'Dell',
            procesador: 'Intel i7',
            modelo: 'XPS 15',
            ram: 16
        },
        {
            marca: 'Apple',
            procesador: 'M1',
            modelo: 'MacBook Pro',
            ram: 8
        },
        {
            marca: 'HP',
            procesador: 'AMD Ryzen 5',
            modelo: 'Pavilion',
            ram: 12
        }
    ]);
};

module.exports = createComputerSeeds;

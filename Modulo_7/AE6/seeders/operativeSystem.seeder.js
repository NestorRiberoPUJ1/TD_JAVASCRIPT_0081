const {OperativeSystem} = require('../models/tables');

const createOperativeSystemSeeds = async () => {
    await OperativeSystem.bulkCreate([
        {
            name: 'Windows'
        },
        {
            name: 'macOS'
        },
        {
            name: 'Linux'
        }
    ]);
};

module.exports = createOperativeSystemSeeds;
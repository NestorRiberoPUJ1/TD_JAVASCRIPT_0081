/* TODO EL CRUD */
const { Computer, ProductSerial } = require('../models/tables');

const createComputer = async (data) => {
    try {
        const newComputer = await Computer.create(data);
        return newComputer;
    } catch (error) {
        console.error(error);
        return false;
    }
};

const getAllComputers = async () => {
    try {
        const computers = await Computer.findAll({
            include: [  // Incluir la relación con ProductSerial
                {
                    model: ProductSerial,
                    as: 'productSerial',
                    include: 'operativeSystem'  // Incluir la relación con OperativeSystem dentro de ProductSerial
                }
            ]
        });
        return computers;
    } catch (error) {
        return false;
    }
};

const getComputerById = async (id) => {
    try {
        const computer = await Computer.findByPk(id);
        return computer;
    } catch (error) {
        return false;
    }
};

const updateComputer = async (id, data) => {
    try {
        const updatedComputer = await Computer.update(data, {
            where: { id }
        });
        return updatedComputer;
    } catch (error) {
        return false;
    }
};

const deleteComputer = async (id) => {
    try {
        const deleted = await Computer.destroy({
            where: { id }
        });
        return deleted;
    } catch (error) {
        return false;
    }
};

module.exports = {
    createComputer,
    getAllComputers,
    getComputerById,
    updateComputer,
    deleteComputer,
};



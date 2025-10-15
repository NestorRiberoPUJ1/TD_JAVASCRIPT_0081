const petModel = require('../models/pets');



// Crear nueva mascota
const createPet = async (req, res) => {
    const data = req.body;
    const nuevaMascota = await petModel.createPet(data);
    return res.status(201).json(nuevaMascota);
};
// Listar todas las mascotas
const getPets = async (req, res) => {
    const mascotas = await petModel.getPets();
    return res.status(200).json(mascotas);
};
// Buscar mascota por ID
const getPetById = async (req, res) => {
    const { id } = req.params;
    const mascota = await petModel.getPetById(id);
    if (mascota) {
        return res.status(200).json(mascota);
    } else {
        return res.status(404).json({ message: 'Mascota no encontrada' });
    }
};
// Actualizar mascota por ID
const updatePet = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const buscarMascota = await petModel.getPetById(id);
    if (buscarMascota) {
        const mascotaActualizada = await petModel.updatePet(id, data);
        return res.status(200).json(mascotaActualizada);
    } else {
        return res.status(404).json({ message: 'Mascota no encontrada' });
    }
};
// Borrar mascota por ID
const deletePet = async (req, res) => {
    const { id } = req.params;
    const result=  await petModel.deletePet(id);
    if (result.rowCount > 0) {
        return res.status(204).send();
    } else {
        return res.status(404).json({ message: 'Mascota no encontrada' });
    }
};

module.exports = {
    createPet,
    getPets,
    getPetById,
    updatePet,
    deletePet
};


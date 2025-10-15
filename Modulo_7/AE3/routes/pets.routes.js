const router = require('express').Router();

const petControllers = require('../controllers/pets.controllers');

// RUTAS PARA MASCOTAS

// Crear nueva mascota
router.post('/', petControllers.createPet);
// Listar todas las mascotas
router.get('/', petControllers.getPets);
// Buscar mascota por ID
router.get('/:id', petControllers.getPetById);
// Actualizar mascota por ID
router.put('/:id', petControllers.updatePet);
// Borrar mascota por ID
router.delete('/:id', petControllers.deletePet);



module.exports = router;

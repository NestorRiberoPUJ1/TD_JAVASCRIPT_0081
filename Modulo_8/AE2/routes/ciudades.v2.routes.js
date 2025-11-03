const router = require('express').Router();

const ciudadController = require('../controllers/ciudades.v2.controllers');

//Listar todas las ciudades
router.get('', ciudadController.getCiudades);
//Obtener una ciudad por ID
router.get('/:id', ciudadController.getCiudadPorId);
//Crear una nueva ciudad
router.post('', ciudadController.postCiudad);
//Actualizar una ciudad existente
router.put('/:id', ciudadController.putCiudad);
//Eliminar una ciudad
router.delete('/:id', ciudadController.deleteCiudad);

module.exports = router;
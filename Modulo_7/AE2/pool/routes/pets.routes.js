
const express = require('express');
const { getPets, getPetById } = require('../models/pets');
const router = express.Router();



// Ruta de inicio
router.get('/', async (req, res) => {
    const filtro = {...req.query};
    res.render('home', {
        layout:'layouts/main',
        pets: await getPets(filtro),
    });
});
// Ruta para ver una mascota por id
router.get('/:id', async (req, res) => {
    res.render('pet',{
        layout:'layouts/main',
        pet: await getPetById(req.params.id),
    });
});


module.exports = router;


const express = require('express');
const router = express.Router();



router.get('', async (req, res) => {
    try {
        const pets = await getPets();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las mascotas' });
    }
});

router.get('/new', async (req, res) => {
    try {
        const pets = await getPets();
        const HTML = `
            <form action="/pets" method="POST">
            <input type="text" name="name" placeholder="Pet Name" required />
            <button type="submit">Add Pet</button>
            </form>
        `;
        res.send(HTML);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las mascotas' });
    }
});

router.post('', async (req, res) => {
    try {
        console.log(req.body);
        await createPet(req.body);
        const pets = await getPets();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la mascota' });
    }
});


module.exports = router;

const express = require('express');
const pool = require('./db/pool');

const { createPet, getPets } = require('./models/pets');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// CREAMOS LAS RUTAS



app.get('/pets', async (req, res) => {
    try {
        const pets = await getPets();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las mascotas' });
    }
});

app.get('/pets/new', async (req, res) => {
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

app.post('/pets', async (req, res) => {
    try {
        console.log(req.body);
        await createPet(req.body);
        const pets = await getPets();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la mascota' });
    }
});

// Cerrar pool al terminar la app
process.on('SIGINT', async () => {
  await pool.end();
  console.log('Pool cerrado. Servidor detenido.');
  process.exit();
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});



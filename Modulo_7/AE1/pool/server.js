const express = require('express');
const pool = require('./db/pool');

const { createPet, getPets } = require('./models/pets');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// CREAMOS LAS RUTAS

const petsRoutes = require('./routes/pets.routes');
app.use('/pets', petsRoutes);


// Cerrar pool al terminar la app
process.on('SIGINT', async () => {
  await pool.end();
  console.log('Pool cerrado. Servidor detenido.');
  process.exit();
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});



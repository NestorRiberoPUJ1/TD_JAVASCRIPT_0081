const express = require('express');
const pool = require('./db/pool');

//importar hbs
const hbs = require('hbs');
const path = require('path');


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Le digo que voy a usar handlebars
app.set('view engine', 'hbs');
// Le digo donde van a estar las vistas
app.set('views', path.join(path.dirname(''), 'views'));
// Le digo donde van a esta las vistas parciales
hbs.registerPartials(path.join(path.dirname(''), 'views/partials'));

hbs.registerHelper('formatData', (data) => {
    if (data instanceof Date) {
        return data.toISOString().split('T')[0];
    }
    if (typeof data === 'string') {
        return data.toUpperCase();
    }
    return data
});

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



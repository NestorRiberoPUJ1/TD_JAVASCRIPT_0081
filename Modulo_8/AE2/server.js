const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware para parsear cuerpos JSON
app.use(express.json());


// ESTRUCTURA DE RUTAS PARA REST API DE CIUDADES
app.use('/api/v1/ciudades', require('./routes/ciudades.routes'));   // Rutas versión 1
app.use('/api/v2/ciudades', require('./routes/ciudades.v2.routes')); // Rutas versión 2 con HATEOAS



// Encencendido del servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
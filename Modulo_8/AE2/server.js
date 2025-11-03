const express = require('express');
const fs = require('fs');
const { listarCiudades } = require('./models/ciudad');
const app = express();
const port = 3000;

// Middleware para parsear cuerpos JSON
app.use(express.json());




// ESTRUCTURA DE RUTAS PARA REST API DE CIUDADES
const ciudadesRouter = require('./routes/ciudades.routes');
app.use('/api/v1/ciudades', ciudadesRouter);



// Encencendido del servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
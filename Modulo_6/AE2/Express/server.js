// Importar el módulo Express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();
// Definir el puerto en el que el servidor escuchará
const PORT = 3001;

// Definir una ruta

app.get('/', (req, res) => {
    res.send('¡Saludos a Luciano y a todos en Chile!');
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});



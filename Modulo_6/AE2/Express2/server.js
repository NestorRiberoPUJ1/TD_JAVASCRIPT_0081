// importacion de express usando modulos ES6
import express from 'express';

import fs from 'fs';

// crear una instancia de express
const app = express();

// definir un puerto
const PORT = 3000;
console.error(PORT);

// definimos rutas
app.get('/', (req, res) => {

  //LEER ARCHIVO
  const time= performance.now();
  const contenido = fs.readFileSync('./contenido.txt', 'utf-8');
  console.log(`Tiempo de lectura SYNC: ${performance.now() - time} ms`);
  res.send(contenido);
});

app.get('/express', (req, res) => {
  const time= performance.now();
  fs.readFile('./contenido.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return res.status(500).send('Error interno del servidor');
    }
    res.send(data);
  });
  console.log(`Tiempo de lectura ASYNC: ${performance.now() - time} ms`);
});


// iniciar el servidor
app.listen(PORT, () => {
  console.warn(`Servidor escuchando en http://localhost:${PORT}`);
});

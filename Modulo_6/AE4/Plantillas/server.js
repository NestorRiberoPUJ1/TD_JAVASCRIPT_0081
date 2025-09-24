//IMPORTACIONES
import express from 'express'; // Es para el servidor
import hbs from 'hbs';  // Es para las plantillas
import path from 'path';    // Es para las rutas de los archivos

//CONFIGURACIONES

const app = express(); // Inicializo express
const port = 8080; // Puerto

// Le digo que voy a usar la carpeta public para los archivos estáticos
app.use(express.static('public'));

// Le digo que voy a usar handlebars
app.set('view engine', 'hbs');
// Le digo donde van a estar las vistas
app.set('views', path.join(path.dirname(''), 'views'));
// Le digo donde van a esta las vistas parciales
hbs.registerPartials(path.join(path.dirname(''), 'views/partials'));


//helpers
hbs.registerHelper('mayusculas', (texto) => {
    return texto.toUpperCase();
});


//PROCESOS

//rutas
app.get('/', (req, res) => {
    res.render('home', {
        ruta: '/',
        usuario: 'Nestor',
        layout:'layouts/main',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {});
});

//SERVIDOR

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
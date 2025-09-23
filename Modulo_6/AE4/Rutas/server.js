import express from 'express';  // Importa express usando ES Modules
import exphbs from 'express-handlebars'; // Importa el motor de plantillas Handlebars

const app = express();  // Crea una instancia de la aplicación Express
const PORT = 8080;  // Define el puerto en el que el servidor escuchará

// CONFIGURACIONES DEL SERVIDOR

app.use(express.static('public')); // Middleware para servir archivos estáticos desde la carpeta 'public'

/* REGISTRAR LA CARPETA DE PARCIALES */
app.engine('handlebars', exphbs.engine({

    partialsDir: 'views/partials'
}));

app.set('view engine', 'handlebars'); // Define Handlebars como el motor de vistas predeterminado
app.set('views', './views'); // Define la carpeta donde se encuentran las vistas


// EXISTEN 3 TIPOS DE RUTAS

// RUTAS ESTÁTICAS
app.get('/', (req, res) => {
    res.send('Ruta raíz: Bienvenido a la página principal');
}); // Ruta raíz

app.get('/about', (req, res) => {
    res.send('Ruta /about: Información sobre nosotros');
}); // Ruta /about

// RUTAS DINÁMICAS
app.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Ruta /productos/${id}: Detalles del producto con ID ${id}`);
}); // Ruta con parámetro dinámico


app.get('/productos/:id/categoria/:categoria', (req, res) => {
    const { id, categoria } = req.params;
    res.send(`Ruta /productos/${id}/categoria/${categoria}: Producto ID ${id} en la categoría ${categoria}`);
}); // Ruta con múltiples parámetros dinámicos


// RUTAS CON CONSULTAS (QUERY PARAMETERS)
app.get('/search', (req, res) => {
    const { q, page } = req.query;
    res.send(`Ruta /search: Buscando por "${q}" en la página ${page}`);
}); // Ruta con parámetros de consulta

// Metodos de HTTP adicionales
app.post('/productos', (req, res) => {
    res.send('Ruta POST /productos: Crear un nuevo producto');
});
app.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Ruta PUT /productos/${id}: Actualizar el producto con ID ${id}`);
});
app.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Ruta DELETE /productos/${id}: Eliminar el producto con ID ${id}`);
});


// Rendering con Handlebars
app.get('/handlebars', (req, res) => {
    res.render('home', {}); // Renderiza la vista 'home.handlebars' sin datos adicionales
});

app.get('/handlebars2', (req, res) => {
    res.render('about', {}); // Renderiza la vista 'about.handlebars' sin datos adicionales
});



app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
}); // Inicia el servidor y escucha en el puerto definido
const express = require('express'); // Importa el framework Express

// IMPORTACIONES PARA MANEJO DE ARCHIVOS
const fileUpload = require('express-fileupload'); // Importa el middleware para manejo de subida de archivos
const fs = require('fs'); // Módulo del sistema de archivos de Node.js
const path = require('path'); // Módulo para manejar rutas de archivos


const app = express(); // Crea una instancia de la aplicación Express
const PORT = 3000; // Define el puerto en el que el servidor escuchará

// CONFIGURACIONES DE LA APLICACIÓN
app.use(express.json()); // Middleware para parsear JSON
app.use(fileUpload()); // Middleware para manejar subida de archivos
app.use(express.static('public')); // Sirve archivos estáticos desde la carpeta 'public'
app.use('/uploads', express.static('uploads')); // Sirve archivos estáticos desde la carpeta 'uploads'

// DIRECTORIO DE SUBIDAS
const UPLOADS_DIR = path.join(__dirname, 'uploads'); // Define el directorio donde se guardarán los archivos subidos
// __dirname es una variable global que contiene la ruta del directorio actual
// , uploads es la carpeta donde se guardarán los archivos subidos

// !fs.existsSync(UPLOADS_DIR) && fs.mkdirSync(UPLOADS_DIR); // Crea el directorio de subidas si no existe
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR);
}

// WHITE LIST DE EXTENSIONES PERMITIDAS
const ALLOWED_EXTENSIONS = {
  images: ['png', 'jpg', 'jpeg', 'gif'],
  documents: ['pdf', 'docx', 'txt'],
  video: ['mp4', 'avi', 'mov'],
  audio: ['mp3', 'wav', 'aac']
}; // Define las extensiones de archivo permitidas
// FILE SIZE LIMIT
const FILE_SIZE_LIMIT = {
  images: 5 * 1024 * 1024, // 5 MB
  documents: 10 * 1024 * 1024, // 10 MB
  video: 50 * 1024 * 1024, // 50 MB
  audio: 20 * 1024 * 1024 // 20 MB
}

const generarHTMLImagenes = () => {
  const archivos = fs.readdirSync(UPLOADS_DIR);
  let html = '';
  archivos.forEach(nombre => {
    const stats = fs.statSync(path.join(UPLOADS_DIR, nombre));
    const sizeKB = (stats.size / 1024).toFixed(2);
    const mimetype = path.extname(nombre).toLowerCase().replace('.', '');
    html += `
      <div class="image-container">
        <img src="/uploads/${nombre}" alt="${nombre}">
        <p>${nombre} - ${sizeKB} KB - ${mimetype}</p>
        <form action="/delete/${nombre}" method="POST" style="display:inline">
          <button type="submit">Eliminar</button>
        </form>
      </div>
    `;
  });
  return html;
}


// RUTAS DE LA APLICACIÓN

// Ruta para ver el formulario de subida y las imágenes subidas
app.get('/', (req, res) => {
  const htmlBase = fs.readFileSync(path.join(__dirname, 'public', 'home.html'), 'utf8');
  const htmlFinal = htmlBase.replace('<!-- IMAGENES_AQUI -->', generarHTMLImagenes());
  res.send(htmlFinal);
});

// Ruta para manejar la subida de archivos

app.post('/upload', (req, res) => {
  if (!req.files || !req.files.archivo) {
    return res.send('<p>No se ha seleccionado ningún archivo. <a href="/">Volver</a></p>');
  }
  // Manejar múltiples archivos o un solo archivo siempre como un array
  const archivos = Array.isArray(req.files.archivo) ? req.files.archivo : [req.files.archivo];
  archivos.forEach(archivo => {
    const extension = path.extname(archivo.name).toLowerCase().replace('.', '');
    // Validar extensión
    if (!ALLOWED_EXTENSIONS.images.includes(extension)) {
      return res.send(`<p>Extensión no permitida: ${archivo.name}. <a href="/">Volver</a></p>`);
    }
    // Validar tamaño
    if (archivo.size > FILE_SIZE_LIMIT.images) {
      return res.send(`<p>El archivo es demasiado grande: ${archivo.name}. <a href="/">Volver</a></p>`);
    }
    // Renombra el archivo para evitar conflictos
    const nombreUnico = `${Date.now()}-${archivo.name}`;
    // Mover el archivo al directorio de subidas
    archivo.mv(path.join(UPLOADS_DIR, nombreUnico), err => {
      if (err) return res.send(`<p>Error al subir ${archivo.name}. <a href="/">Volver</a></p>`);
    });
  });

  return res.redirect('/');
});

// Ruta para eliminar un archivo
app.post('/delete/:nombreArchivo', (req, res) => {
  const archivoPath = path.join(UPLOADS_DIR, req.params.nombreArchivo);
  fs.unlink(archivoPath, err => {
    if (err) return res.send('<p>No se pudo eliminar el archivo. <a href="/">Volver</a></p>');
    res.redirect('/');
  });
});

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
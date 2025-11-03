const fs = require('fs');
const path = require('path');

// Ruta al archivo JSON que almacena las ciudades con path module solucionamos rutas relativas
const rutaArchivo = path.join(__dirname, '../DB/ciudades.json'); 

// CRUD de ciudades


// LISTAR CIUDADES
const listarCiudades = () => {
    const data = fs.readFileSync(rutaArchivo, 'utf-8'); // Leer el archivo de ciudades
    const ciudades = JSON.parse(data);
    return ciudades;
}

// BUSCAR CIUDAD POR ID
const buscarCiudadPorId = (id) => {
    const ciudades = listarCiudades();  // Obtener todas las ciudades
    return ciudades.find(ciudad => ciudad.id === id); // Buscar la ciudad por ID
}

// CREAR CIUDAD
const crearCiudad = (nuevaCiudad) => {
    const ciudades = listarCiudades(); // Obtener todas las ciudades
    const indices = ciudades.map(ciudad => ciudad.id); // Obtener los IDs existentes
    const nuevoId = indices.length > 0 ? Math.max(...indices) + 1 : 1; // Si no hay ciudades, iniciar en 1, sino incrementar el máximo ID
    nuevaCiudad.id = nuevoId; // Asignar el nuevo ID a la ciudad
    ciudades.push(nuevaCiudad); // Agregar la nueva ciudad al arreglo
    fs.writeFileSync(rutaArchivo, JSON.stringify(ciudades, null, 2)); // Guardar el arreglo actualizado en el archivo
    return nuevaCiudad;
}

// ACTUALIZAR CIUDAD
const actualizarCiudad = (id, datosActualizados) => {
    const ciudades = listarCiudades(); // Obtener todas las ciudades
    const indice = ciudades.findIndex(ciudad => ciudad.id === id); // Encontrar el índice de la ciudad a actualizar
    if (indice !== -1) {
        ciudades[indice] = { ...ciudades[indice], ...datosActualizados }; // Actualizar los datos de la ciudad
        fs.writeFileSync(rutaArchivo, JSON.stringify(ciudades, null, 2)); // Guardar el arreglo actualizado en el archivo
        return ciudades[indice];
    }
    return null; // Retornar null si la ciudad no se encuentra
}

// ELIMINAR CIUDAD
const eliminarCiudad = (id) => {
    const ciudades = listarCiudades(); // Obtener todas las ciudades
    const nuevasCiudades = ciudades.filter(ciudad => ciudad.id !== id); // Filtrar la ciudad a eliminar
    fs.writeFileSync(rutaArchivo, JSON.stringify(nuevasCiudades, null, 2)); // Guardar el arreglo actualizado en el archivo
    return ciudades.length !== nuevasCiudades.length; // Retornar true si se eliminó una ciudad
}
module.exports = {
    listarCiudades,
    buscarCiudadPorId,
    crearCiudad,
    actualizarCiudad,
    eliminarCiudad
};// Rutas y lógica del servidor aquí

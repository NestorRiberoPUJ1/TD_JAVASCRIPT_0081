//MANIPULACION DE ARCHIVOS

const fs = require('fs/promises');  //importar el modulo de file system promises para trabajar con archivos de manera asincrona

const FILE_PATH = './paises.json'; // Ruta del archivo


const guardarPaises = async (paises) => {
    try {
        await fs.writeFile(FILE_PATH, JSON.stringify(paises, null, 2)); // Escribo el archivo en la ruta especificada
        console.log('Archivo guardado');
    }
    catch (error) {
        console.error('Error al guardar el archivo', error);
    }
}

const leerPaises = async () => {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf-8'); // Leo el archivo en la ruta especificada
        const paises = JSON.parse(data); // Convierto el archivo a un objeto
        console.log(paises);
        return (paises);
    }
    catch (error) {
        console.error('Error al leer el archivo', error);
    }
}

const agregarPais = async (pais) => {
    console.log("Agregando pais:", pais);
    //VALIDACIONES
    if (!pais.nombre || !pais.continente || !pais.idioma) {
        console.error('Faltan datos del pais');
        return;
    }
    try {
        const data = await fs.readFile(FILE_PATH, 'utf-8'); // Leo el archivo en la ruta especificada
        const paises = JSON.parse(data); // Convierto el archivo a un objeto
        const ultimoPais = paises.at(-1); // Obtengo el ultimo pais
        const nuevoId = ultimoPais ? ultimoPais.id + 1 : 1; // Si no hay paises, el id sera 1
        const nuevoPais = { id: nuevoId, ...pais };
        paises.push(nuevoPais); // Agrego el nuevo pais al array
        await guardarPaises(paises); // Guardo el archivo con el nuevo pais
    }
    catch (error) {
        console.error('Error al agregar el pais', error);
    }

}

const eliminarPais = async (id) => {
    try {
        const paises = await leerPaises(); // Leo el archivo en la ruta especificada
        const idx = paises.findIndex(pais => pais.id === id); // Busco el pais por id
        if (idx === -1) {
            console.error('Pais no encontrado');
            return;
        }
        paises.splice(idx, 1); // Elimino el pais del array
        await guardarPaises(paises); // Guardo el archivo sin el pais eliminado
    } catch (error) {
        console.error('Error al eliminar el pais', error);
    }
}

const actualizarPais = async (id, paisActualizado) => {
    try {
        const paises = await leerPaises(); // Leo el archivo en la ruta especificada
        const idx = paises.findIndex(pais => pais.id === id); // Busco el pais por id
        if (idx === -1) {
            console.error('Pais no encontrado');
            return;
        }
        paises[idx] = { id, ...paisActualizado }; // Actualizo el pais del array
        await guardarPaises(paises); // Guardo el archivo con el pais actualizado
    } catch (error) {
        console.error('Error al actualizar el pais', error);
    }
}


module.exports={
    guardarPaises,
    leerPaises,
    agregarPais,
    eliminarPais,
    actualizarPais,
}
const paises = require('./paises.js');

const paisesIniciales = [
    { id: 1, nombre: "Argentina", continente: "America", idioma: "Español" },
    { id: 2, nombre: "Ecuador", continente: "America", idioma: "Español" },
    { id: 3, nombre: "Colombia", continente: "America", idioma: "Español" },
    { id: 4, nombre: "Brasil", continente: "America", idioma: "Portugues" },
    { id: 5, nombre: "Chile", continente: "America", idioma: "Español" },
    { id: 6, nombre: "Peru", continente: "America", idioma: "Español" },
    { id: 7, nombre: "Venezuela", continente: "America", idioma: "Español" },
    { id: 8, nombre: "Paraguay", continente: "America", idioma: "Español" },
    { id: 9, nombre: "Uruguay", continente: "America", idioma: "Español" },
    { id: 10, nombre: "Bolivia", continente: "America", idioma: "Español" },
];



const main = async () => {
    await paises.guardarPaises(paisesIniciales); // Llamo a la funcion para guardar el archivohivo
    await paises.agregarPais({ nombre: "Mexico", continente: "America" }); // Llamo a la funcion para agregar un pais mal
    await paises.agregarPais({ nombre: "Mexico", continente: "America", idioma: "Español" }); // Llamo a la funcion para agregar un pais bien
    await paises.leerPaises(); // Llamo a la funcion para leer el archivo
    await paises.eliminarPais(10); // Llamo a la funcion para eliminar un pais
    await paises.leerPaises(); // Llamo a la funcion para leer el archivo
    await paises.actualizarPais(11,{ nombre: "México", continente: "America", idioma: "Español" });
};


main();

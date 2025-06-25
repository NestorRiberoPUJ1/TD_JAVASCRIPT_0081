

/* FUNCIONES */

// Una función es bloque de código que se puede reutilizar, que puede recibir parámetros y puede devolver un valor.

// Definición de una función
// function nombreDeLaFuncion(parametros) {
// Código a ejecutar
//return valor; // Opcional, si se quiere devolver un valor
//}

// Funcion sin parámetros ni retorno
function saludar() {
    console.log("¡Hola, mundo!");
}
saludar(); // Llama a la función saludar

// Función con parámetros y sin retorno
function saludarConNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
saludarConNombre("Juan"); // Llama a la función con el parámetro "Juan

// Funcion sin parámetros y con retorno
function obtenerHoraActual() {
    return new Date().toLocaleTimeString(); // Devuelve la hora actual en formato de
};
let horaActual = obtenerHoraActual(); // Llama a la función y almacena el resultado
console.log(`La hora actual es: ${horaActual}`); // Muestra la hora actual
// Función con parámetros y retorno
function sumar(a, b) {
    return a + b; // Devuelve la suma de a y b
}
let resultado = sumar(5, 3); // Llama a la función y almacena el resultado
console.log(`El resultado de la suma es: ${resultado}`); // Muestra el resultado


// Funcion con parámetros por defecto
function saludarConNombreYEdad(nombre = "Desconocido", edad = 0) {
    console.log(`¡Hola, ${nombre}! Tienes ${edad} años.`);
}
saludarConNombreYEdad("Ana", 25); // Llama a la función con los parámetros "Ana" y 25
saludarConNombreYEdad(); // Llama a la función sin parámetros, usando los valores por defecto

// Funciones Flecha (Arrow Functions)
// Son una forma más concisa de escribir funciones en JavaScript
// Problema: Las funciones flecha no tienen su propio contexto de `this`, por lo que no se pueden usar como métodos de objetos si necesitan acceder a `this` del objeto.
const saludarFlecha = (nombre) => {
    console.log(`¡Hola, ${nombre}!`);
}
saludarFlecha("Pedro"); // Llama a la función flecha con el parámetro "Pedro"

// Función flecha con retorno implícito
const sumarFlecha = (a, b) => a + b; // Retorno
let resultadoFlecha = sumarFlecha(10, 20); // Llama a la función flecha y almacena el resultado
console.log(`El resultado de la suma es: ${resultadoFlecha}`); // Muestra el resultado

// Función anónima (sin nombre)
const funcionAnonima = function() {
    console.log("Esta es una función anónima.");
}
funcionAnonima(); // Llama a la función anónima

// Funciones anonimas usualmente se utilizan como callbacks en eventos o métodos de arrays
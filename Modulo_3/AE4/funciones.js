/* FUNCIONES */


/* FUNCIONES TRADICIONALES  function */

// SINTAXIS
// function nombreFuncion(param1, param2, ..., paramN) {    //Parametros opcionales 
//     // cuerpo de la función
//     return valor; // opcional
// }

//Caso 1 Funcion sin parametros y sin retorno (procedimental)
function saludar() {
    console.log("¡Hola, mundo!");
}

//Caso 2 Funcion con parametros y sin retorno (procedimental)
function saludarPersona(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

//Caso 3 Funcion con parametros y con retorno (funcional)
function sumar(a, b) {
    return a + b;
}

//Caso 4 Funcion sin parametros y con retorno (funcional)
function obtenerFechaActual() {
    return new Date();
}

// EJECUCIÓN

let saludo = saludar(); // Llama a la función sin parámetros
console.log(saludo); // Muestra el saludo en la consola
let saludoPersona = saludarPersona("Juan"); // Llama a la función con un parámetro
console.log(saludoPersona); // Muestra el saludo personalizado en la consola
let resultado = sumar(5, 3); // Llama a la función con dos parámetros y guarda el resultado
let resultadoSuma = sumar(resultado, 20); // Llama a la función con dos parámetros y guarda el resultado
console.log("Resultado de la suma: " + resultadoSuma); // Muestra el resultado de la
let fechaActual = obtenerFechaActual(); // Llama a la función sin parámetros y guarda el resultado
console.log("Fecha actual: " + fechaActual); // Muestra la fecha actual


// EXPLICACION FUNCIONES

let base = 2;
let exponente = 4;
// 2^4 = 16 => 2*2*2*2

let resultadoPotencia = base;
for (let i = 0; i < exponente; i++) {
    resultadoPotencia = resultado * base; // Multiplicamos el resultado por la base en cada iteración
}
console.log(`El resultado de ${base} ^${exponente} es: ` + resultadoPotencia); // Muestra el resultado de la potencia

// PARA VOLVERLO UNA FUNCION
function potencia(baseParam, exponenteParam) {
    let resultadoPotencia2 = baseParam;
    for (let i = 0; i < exponenteParam; i++) {
        resultadoPotencia2 = resultadoPotencia2 * baseParam; // Multiplicamos el resultado por la base en cada iteración
    }
    console.log(`El resultado de ${baseParam} ^${exponenteParam} es: ` + resultadoPotencia2); // Muestra el resultado de la potencia  
}
// Llamamos a la función potencia con los valores base y exponente
potencia(2, 8); // Llama a la función potencia con base 2


/* ALCANCE DE VARIABLES */

let variable1 = "Hola";
function funcionAlcance() {
    let variable2 = "mundo"; // Variable local
    console.log(variable1 + " " + variable2); // Accede a la variable global y a la local
}
funcionAlcance(); // Llama a la función que imprime "hola mundo"

var global1 = "world";
function funcionAlcance2(variable1, global1) {
    console.log(variable1 + " " + global1); // Accede a la variable global y a la local
}
funcionAlcance2("Hola :)", "Mundo :)"); // Llama a la función que imprime "hola mundo"


function funcionAlcance3() {
    var variable3 = "¡Hola desde la función!";
    console.log(variable3); // Accede a la variable local
}
funcionAlcance3(); // Llama a la función que imprime "¡Hola desde   la función!"


function adicionar(a, b) {
    return a + b; // Retorna la suma de a y b
}
function multiplicar(a, b) {
    return a * b; // Retorna el producto de a y b
}
function diferencia(a, b) {
    return a - b; // Retorna la diferencia de a y b
}
function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero no permitida"; // Manejo de error para división por cero
    }
    return a / b; // Retorna el cociente de a y b
}

adicionar(5, 3); // Llama a la función adicionar con 5 y 3
multiplicar(4, 2); // Llama a la función multiplicar con 4 y 2
diferencia(10, 5); // Llama a la función diferencia con 10 y 5


var nombre = "Luis";
function apodo() {
    var nombre;
    nombre = "Luchito";
    console.log("El apodo es: " + nombre); // Muestra el apodo dentro de la función
}
apodo();
console.log(nombre); // Muestra el valor de la variable nombre después de llamar a la función apodo




// funciones anidadas
function funcionExterna() {
    console.log("Esta es la función externa.");

    function funcionInterna() {
        console.log("Esta es la función interna.");
    }

    funcionInterna(); // Llama a la función interna desde la externa
}
funcionExterna(); // Llama a la función externa que a su vez llama a la
// función interna
// funcionInterna(); // Esto generaría un error porque funcionInterna no está definida en el ámbito global
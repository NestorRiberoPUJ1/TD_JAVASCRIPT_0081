/* BUCLES */


// Bucle for, se usa para iterar un bloque de código un número específico de veces.
// sintaxis for(variable_iteradora=valor_inicial; condición_permanencia; incremento_o_decremento) {
//     bloque_de_código;
// }

// Ejemplo: Imprimir números del 0 al 9
for (let iterador = 0; iterador < 10; iterador++) {
    console.log(iterador);
}
console.log("-*-*-*-*-*-*-*-*-*-*");
for (let i = -14; i <= 14; i++) {
    console.log(i);
}
// for tambien puede ser negativo
console.log("-*-*-*-*-*-*-*-*-*-*");
// Ejemplo: Imprimir números del 10 al 0
for (let iterador = 10; iterador >= 0; iterador--) {
    console.log(iterador);
}
console.log("-*-*-*-*-*-*-*-*-*-*");

// bucle for está comunmente usado para recorrer arreglos

let gruposMusicales = ["Los Bukis", "The Strokes", "The White Stripes", "Los Angeles Azules", "Los Auténticos Decadentes"];

let tamaño = gruposMusicales.length;
for (let i = 0; i < tamaño; i++) {
    console.log(gruposMusicales[i]);
}
console.log("-*-*-*-*-*-*-*-*-*-*");

let matrizNumeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrizNumeros.length; i++) {
    let fila = "";
    for (let j = 0; j < matrizNumeros[i].length; j++) {
        fila += matrizNumeros[i][j] + " ";
    }
    console.log(fila);
}
console.log("-*-*-*-*-*-*-*-*-*-*");



// BUCLE WHILE, se usa para iterar un bloque de código mientras una condición sea verdadera.

// SINTAXIS: while(condición_de_permanencia) {
//     bloque_de_código;
// }


let limite = 2 ** 8; // Definimos un límite para el número aleatorio
let numero_aleatorio = Math.floor(Math.random() * limite) + 1; // Genera un número aleatorio entre 1 y 100
let numero_adivinado = -1;
let intentos = 0;
let current_time = console.time("Tiempo de ejecución");
while (numero_adivinado !== numero_aleatorio) {
    numero_adivinado++;
    intentos++;
}
console.log(`Número aleatorio: ${numero_aleatorio}`);
console.log(`Número adivinado: ${numero_adivinado}`);
console.log(`Intentos: ${intentos}`);
console.timeEnd("Tiempo de ejecución");

console.log("-*-*-*-*-*-*-*-*-*-*");


//LET

// Se puede crear sin inicializar
let x;
// Se puede crear e inicializar 
let y = 5;
// Se puede crear y asignar un valor posteriormente
x = 10;
// Se puede reasignar un valor
x = 17;
// Se puede declarar varias variables a la vez
let a = 1, b = 2, c = 3;


//VAR presenta un comportamiento de levantamiento (hoisting),
// lo que significa que las declaraciones de variables se mueven al inicio del ámbito en el
// que se declaran, pero no las asignaciones de valor.
// Se puede crear sin inicializar
var z;
// Se puede crear e inicializar
var w = 5;
// Se puede crear y asignar un valor posteriormente
z = 10;
// Se puede reasignar un valor
z = 15;
// Se puede declarar varias variables a la vez
var m = 1, n = 2, o = 3;

console.log(x, z);

if (true) {
    let x = 20;
    console.log("x en if:", x)
    var z = 9;
    console.log("z en if:", z)
}
console.log("x fuera del if:", x)
console.log("z fuera del if:", z)


// CONST es una variable de solo lectura, no se puede reasignar
const PI = 3.14159;
// PARA MODIFICAR EL VALOR DE UNA CONSTANTE, SE DEBE HACER A TRAVÉS DE UN OBJETO O UN ARRAY
const mundialClubes = [
    "Palmeiras",
    "Fluminense",
    "Real Madrid",
    "PSG",
];
console.log(mundialClubes);
mundialClubes.pop();
console.log(mundialClubes);
mundialClubes.push("Barcelona");
mundialClubes[3] = "Boca Juniors";
console.log(mundialClubes);
// Para limpiar el array
mundialClubes.length = 0;
console.log(mundialClubes);

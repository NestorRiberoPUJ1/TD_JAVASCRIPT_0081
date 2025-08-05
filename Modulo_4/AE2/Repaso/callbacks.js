/* CALLBACKS */

// En resumen son funciones que se pasan como argumentos a otras funciones.
// Se ejecutan en un momento posterior, cuando se cumplen ciertas condiciones.



const picarComida = (alimento) => {
    console.log(`Picar ${alimento} con cuchillo`);
}
const condimentar = (alimento) => {
    console.log(`Condimentar ${alimento} con sal y pimienta`);
}


const cocinar = (alimento, fnPicar, fnCondimentar, alergias) => {
    // Llamamos a las funciones de callback
    fnPicar(alimento);
    if (!alergias) {
        fnCondimentar(alimento);
    }
    // Cocinamos el alimento
    console.log(`Cocinando ${alimento}`);
}

// Llamamos a la función cocinar pasando las funciones de callback
cocinar('carne', picarComida, condimentar, false);
console.log('-------------------');
cocinar('pescado', picarComida, condimentar, true);
console.log('-------------------');
// comida hindú
cocinar(
    'pollo',    //El alimento
    (comida) => console.log(`Picar ${comida} con las manos`),   // Función de picar
    (comida) => console.log(`Condimentar ${comida} con curry`),  // Función de condimentar
    false   // Alergias
);
console.log('-------------------');
cocinar(
    'pollo',    //El alimento
    (comida) => console.log(`Picar ${comida} con cuchillo para pollo`),   // Función de picar
    (comida) => console.log(`Condimentar ${comida} con Sriracha`),  // Función de condimentar
    false   // Alergias
);




console.log('-------------------');


// METODOS DE ARREGLOS
const numeros = [1, 2, 3, 4, 5];
const numerosAlCuadrado = numeros.map((numero) => numero * numero);
console.log(numerosAlCuadrado); // [1, 4, 9, 16, 25]

console.log('-------------------');
const letras = ['a', 'b', 'c', 'd', 'e'];
letras.map((a1, a2, a3) => console.log(a1, a2, a3));






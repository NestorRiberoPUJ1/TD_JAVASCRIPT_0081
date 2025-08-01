/* CALLBACKS O FUNCIONES DE RETORNO */

// Son funciones que se ejecutan en un momento posterior
// Usualmente se usan como argumentos de otras funciones


const arreglo = [1, 2, 3, 4, 5];

arreglo.forEach((valor, indice, arreglo) => { console.log(valor, indice, arreglo) });


const calculadora = (a, b, operacion) => {
    return operacion(a, b);
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;


console.log(calculadora(10, 5, suma)); // 15
console.log(calculadora(10, 5, resta)); // 5
console.log(calculadora(10, 5, multiplicacion)); // 50
console.log(calculadora(10, 5, division)); // 2

console.log(calculadora(10, 6, (a, b) => a % b)); // 0


//const arreglo = [1, 2, 3, 4, 5];

//Quiero devolver los números pares del arreglo
const pares = arreglo.filter((valor) => valor % 2 === 0);
const esPar= (valor) => valor % 2 === 0;
const pares2 = arreglo.filter(esPar);
console.log(pares); // [2, 4]
console.log(pares2); // [2, 4]
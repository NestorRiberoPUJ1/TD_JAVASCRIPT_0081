/* SETS */

// Un set es una colección de valores únicos
// No permite duplicados y no tiene un orden específico
// Se puede ver como una lista de opciones sin repeticiones

const divisas = new Set(['USD', 'EUR', 'GBP', 'JPY', 'COP', 'CLP']);
console.log(divisas); // Muestra el set de divisas
console.log(divisas.size); // Muestra el número de elementos en el set
console.log(divisas.has('USD')); // Verifica si 'USD' está en el set
console.log(divisas.has('ARS')); // Verifica si 'ARS' está en el set
divisas.add('ARS'); // Agrega 'ARS' al set
console.log(divisas.has('ARS')); // Verifica si 'ARS' está en el set
divisas.delete('ARS'); // Elimina 'ARS' del set
console.log(divisas.has('ARS')); // Verifica si 'ARS' está en el set
console.log(divisas); // Muestra el set de divisas después de las operaciones
divisas.clear(); // Limpia el set, eliminando todos sus elementos
console.log(divisas); // Muestra el set vacío


/* MAPS */

// Un map es una colección de pares clave-valor
// Permite almacenar datos asociados a claves únicas

const mapa = new Map();
mapa.set('nombre', 'Juan'); // Agrega un par clave-valor al map
mapa.set('edad', 30); // Agrega otro par clave-valor al map
console.log(mapa); // Muestra el map con sus pares clave-valor
mapa.set(true, 'verdadero'); // Agrega un par clave-valor con una clave booleana
console.log(mapa);
console.log(mapa.get('nombre')); // Obtiene el valor asociado a la clave 'nombre'
console.log(mapa.get('edad')); // Obtiene el valor asociado a la clave 'edad
console.log(mapa.get(true)); // Obtiene el valor asociado a la clave booleana


/* ITERADORES */
// Un iterador es un objeto que permite recorrer una colección de datos
// Implementa el método next() que devuelve el siguiente elemento de la colección
// Es muy similar a un cursor en una base de datos o listas enlazadas

const iterable = ['Chile', 'Argentina', 'Perú', 'Colombia', 'Brasil', undefined, null];
const iterador = iterable[Symbol.iterator](); // Obtiene el iterador del array
console.log(iterador.next()); // Devuelve el primer elemento del iterador
console.log(iterador.next()); // Devuelve el segundo elemento del iterador
console.log(iterador.next()); // Devuelve el tercer elemento del iterador
console.log(iterador.next()); // Devuelve el cuarto elemento del iterador
console.log(iterador.next()); // Devuelve el quinto elemento del iterador
console.log(iterador.next()); // Devuelve un objeto con done: true, indicando que no hay más elementos
console.log(iterador.next()); // Devuelve un objeto con done: true, indicando que no hay más elementos
console.log(iterador.next()); // Intenta obtener el siguiente elemento, pero ya no hay más, devuelve un objeto con done: true
console.log(iterador.return); // Finaliza el iterador, devuelve un objeto con done: true



/* GENERADORES */
// Un generador es una función que puede ser pausada y reanudada
// Utiliza la palabra clave yield para devolver valores de forma secuencial
function* generador() {
    yield 'Chile';
    yield 'Argentina';
    yield 'Perú';
    yield 'Colombia';
    yield 'Brasil';
}

const gen = generador(); // Crea una instancia del generador
console.log(gen.next()); // Devuelve el primer valor del generador
console.log(gen.next()); // Devuelve el segundo valor del generador
console.log(gen.next()); // Devuelve el tercer valor del generador
console.log(gen.next()); // Devuelve el cuarto valor del generador
console.log(gen.next()); // Devuelve el quinto valor del generador
console.log(gen.next()); // Devuelve un objeto con done: true, indicando que no hay más valores
console.log(gen.next()); // Intenta obtener el siguiente valor, pero ya no hay más, devuelve un objeto con done: true
console.log(gen.return()); // Finaliza el gener


/* PROMESAS */
// Son procesos asíncronos que representan un valor que puede estar disponible ahora, en el futuro o nunca

const promesa = new Promise((resolve, reject) => {
    let currentTime = performance.now(); // Obtiene el tiempo actual en milisegundos
    while (currentTime + 2000 > performance.now()) { // Espera 2 segundos
        console.log('Esperando...'); // Imprime "Esperando..." indefinidamente
        const random = Math.random();
        console.log('Número aleatorio:', random); // Imprime el número aleatorio generado
        if (random > 0.999) {
            resolve('Promesa resuelta, se logró'); // Resuelve la promesa si el número aleatorio es mayor que 0.99
            break; // Sale del bucle
        }
    }
    reject('Promesa rechazada, no se logró'); // Rechaza la promesa si no se cumple la condición
});

promesa.then((resultado) => {
    console.log(resultado); // Imprime el resultado de la promesa si se resuelve
}).catch((error) => {
    console.error(error); // Imprime el error si la promesa es rechazada
}).finally(() => {
    console.log('Proceso finalizado'); // Imprime un mensaje al finalizar el proceso, independientemente de si se resolvió o rechazó
});
console.log('--------------------');
try {
    const resultado = await promesa; // Espera a que la promesa se resuelva
    console.log('Resultado:', resultado); // Imprime el resultado de la promesa
} catch (error) {
    console.error('Error:', error); // Imprime el error si la promesa es rechazada
} finally {
    console.log('Proceso finalizado'); // Imprime un mensaje al finalizar el proceso, independientemente de si se resolvió o rechazó
}

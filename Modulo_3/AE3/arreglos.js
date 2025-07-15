

/* ARREGLOS */

let numeros = [1, 2, 3, 4, 5]; // arreglo de números
let frutas = ["manzana", "banana", "cereza"]; // arreglo de frutas (strings)
let mezclado = [1, "manzana", true, null]; // arreglo mixto
let vacio = []; // arreglo vacío

// SINTAXIS DE CREACIÓN DE ARREGLOS
// tipo_variable (let, const, var) nombre_variable = [elemento1, elemento2, ...]; 

// Acceso a elementos del arreglo

let tablaPilotos = [
    "Oscar Piastri",
    "Lando Norris",
    "Max Verstappen",
    "George Russell",
    "Charles Leclerc",
    "Lewis Hamilton",
    "Kimi Antonelli",
]
// Acceso al primer elemento
console.log(tablaPilotos[0]); // Oscar Piastri
// Acceso al segundo elemento
console.log(tablaPilotos[1]); // Lando Norris
// Acceso a Charles Leclerc
console.log(tablaPilotos[4]); // Charles Leclerc

let pilotosDeAcademiaF2 = [
    "Oscar Piastri",
    "Lando Norris",
    "George Russell",
    "Charles Leclerc",
    "Kimi Antonelli",
    "Arthur Leclerc",
]

// Unión de arreglos
let pilotosF1 = tablaPilotos.concat(pilotosDeAcademiaF2);
console.log(pilotosF1); // Muestra todos los pilotos de F1 y F2

// Intersección de arreglos
let pilotosComunes = tablaPilotos.filter(piloto => pilotosDeAcademiaF2.includes(piloto));
console.log(pilotosComunes); // Muestra los pilotos que están en ambos arreglos

// Diferencia de arreglos
let pilotosUnicos = tablaPilotos.filter(piloto => !pilotosDeAcademiaF2.includes(piloto));
console.log(pilotosUnicos); // Muestra los pilotos que están solo en tablaPilotos


// Matrices 

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Acceso a un elemento específico de la matriz "6"
console.log(matriz[1][2]); // 6


// METODOS DE LOS ARREGLOS
let confiteria = [
    "hersheys",
    "m&m's",
    "pringles",
    "icebreakers",
    "kitkat",
    "whopers",
    "nerds"
];
// Método push: Agrega un elemento al final del arreglo
confiteria.push("milkyway");
confiteria.push("marco polo");
console.log(confiteria); // Muestra el arreglo actualizado

// Método pop: Elimina el último elemento del arreglo
confiteria.pop();
console.log(confiteria); // Muestra el arreglo sin el último elemento

// Método shift: Elimina el primer elemento del arreglo
confiteria.shift();
console.log(confiteria); // Muestra el arreglo sin el primer elemento

// Método unshift: Agrega un elemento al inicio del arreglo
confiteria.unshift("oreo");
console.log(confiteria); // Muestra el arreglo con el nuevo primer elemento

// Método splice: Elimina elementos desde un índice específico
confiteria.splice(4, 2); // Elimina 2 elementos a partir del índice 4
console.log(confiteria); // Muestra el arreglo después de la eliminación

// Método slice: Crea un nuevo arreglo con una porción del arreglo original
let porcionConfiteria = confiteria.slice(1, 4); // Toma elementos desde el índice 1 hasta el 3
console.log(porcionConfiteria); // Muestra la porción del arreglo

// Método indexOf: Busca un elemento y devuelve su índice
let indice = confiteria.indexOf("kitkat");
console.log("indice de kitkat", indice); // Muestra el índice del elemento "kitkat" -1 no encontrado
indice = confiteria.indexOf("nerds");
console.log("indice de nerds", indice); // Muestra el índice del elemento "nerds"

// Método includes: Verifica si un elemento está en el arreglo
let contiene = confiteria.includes("icebreakers");
console.log("¿Contiene icebreakers?", contiene); // Muestra true si "icebreakers" está en el arreglo, false si no

// Métdo filter: Crea un nuevo arreglo con los elementos que cumplen una condición
let puntajes = [14, 17, 21, 19, 20, 15, 18, 22];
// Filtra los puntajes mayores o iguales a 20
let puntajesAltos = puntajes.filter((value) => value >= 20);
console.log("Puntajes altos:", puntajesAltos); // Muestra los puntajes que son mayores o iguales a 20
// Método map: Crea un nuevo arreglo aplicando una función a cada elemento
let doblesPuntajes = puntajes.map((value) => value * 2);
console.log("Dobles de los puntajes:", doblesPuntajes); // Muestra los puntajes multiplicados por 2
// Método reduce: Reduce el arreglo a un solo valor aplicando una función
let sumaPuntajes = puntajes.reduce((accumulator, value) => accumulator + value, 0);
console.log("Suma de los puntajes:", sumaPuntajes); // Muestra la suma total de los puntajes

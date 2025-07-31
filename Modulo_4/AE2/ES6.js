
/* FUNCIONALIDADES DE ES6 */

// INTRO DE let y const

//let
let nombre = "Happy Gilmore";
if (1 == 1) {
    let nombre = "Otro Nombre"; // Esta variable es local al bloque
}
console.log(nombre); // Imprime "Happy Gilmore"

//const
const PI = 3.14;
// PI = 3.14159; // Esto causaría un error, ya que PI es una constante
if (1 == 1) {
    const PI = 3.14159; // Esta constante es local al bloque
    console.log(PI); // Imprime 3.14159
}
console.log(PI); // Imprime 3.14

// FUNCIONES FLECHA O FAT ARROW FUNCTIONS

const sumar = (a, b) => {
    return a + b;
}
const multiplicar = (a, b) => a * b; // Si solo hay una línea, se puede omitir el return

// EQUIVALENCIA A FUNCIONES TRADICIONALES
function multiplicacion(a, b) {
    return a * b;
}


// PLANTILLAS DE STRINGS
const nombreUsuario = "John";
const saludo = `Hola, ${nombreUsuario}!`; // Utiliza comillas invertidas para crear una plantilla de string
console.log(saludo); // Imprime "Hola, John!"
// Equivalente a:
const saludoTradicional = "Hola, " + nombreUsuario + "!"; // Utiliza concaten


//DESTRUTURACION

const persona = {
    name: "Alice",
    age: 30,
    city: "Wonderland"
}

const { name, age, city } = persona; // Desestructuración de objeto
console.log(name); // Imprime "Alice"
console.log(age); // Imprime 30
console.log(city); // Imprime "Wonderland"

const { name: nombrePersona, age: edad } = persona; // Renombrar variables al desestructurar
console.log(nombrePersona); // Imprime "Alice"
console.log(edad); // Imprime 30

// EQUIVALENCIA A ACCESO TRADICIONAL
const nombreTradicional = persona.name; // Acceso tradicional a propiedades de objeto
const edadTradicional = persona.age; // Acceso tradicional a propiedades de objeto
console.log(nombreTradicional); // Imprime "Alice"
console.log(edadTradicional); // Imprime 30

// DESTRUCTURACION DE ARREGLOS
const grupos = ["Grupo A", "Grupo B", "Grupo C"];
const [grupo1, grupo2, grupo3] = grupos; // Desestructuración de arreglo
console.log(grupo1); // Imprime "Grupo A"
console.log(grupo2); // Imprime "Grupo B"
console.log(grupo3); // Imprime "Grupo C"
// EQUIVALENCIA A ACCESO TRADICIONAL
const primerGrupo = grupos[0]; // Acceso tradicional a elementos de arreglo
const segundoGrupo = grupos[1]; // Acceso tradicional a elementos de arreglo
console.log(primerGrupo); // Imprime "Grupo A"
console.log(segundoGrupo); // Imprime "Grupo B"


/* DESTRUCTURACION */

const persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        ciudad: 'Madrid',
        pais: 'España'
    },
    hobbies: ['leer', 'correr', 'cocinar'],
    estatura: 1.75
};

const persona2 = {
    nombre: 'Ana',
    edad: 25,
    direccion: {
        ciudad: 'Barcelona',
        pais: 'España'
    },
    hobbies: ['pintar', 'viajar'],
    estatura: 1.65
};


let edad1 = persona.edad; // Asignación directa
let estatura1 = persona.estatura; // Asignación directa

const estaturaPorEdad = (edad, estatura) => {
    return `La estatura de una persona de ${edad} años es ${estatura} metros.`;
};

console.log(estaturaPorEdad(edad1, estatura1)); // Imprime "La estatura de una persona de 30 años es 1.75 metros."

// DESTRUCTURACION DE OBJETOS
const { edad, estatura } = persona; // Desestructuración de objeto directa con el mismo nombre de las propiedades
const { edad: edad2, estatura: estatura2 } = persona2; // Desestructuración de objeto con alias

const { hobbies } = persona; // Desestructuración de objeto para obtener un arreglo
console.log(hobbies); // Imprime ['leer', 'correr', 'cocinar']

let hobbies2 = ['leer', 'correr', 'cocinar'];

const [hobby1, hobby2, hobby3] = hobbies2; // Desestructuración de arreglo
console.log(hobby1, hobby2, hobby3); // Imprime 'leer', 'correr', 'cocinar'

//PARA OBTENER posiciones específicas de un arreglo
const [primerHobby, , tercerHobby] = hobbies2; // Desestructuración de arreglo para obtener el primer y tercer hobby
console.log(primerHobby, tercerHobby); // Imprime 'leer', 'cocinar'


// DESTRUCTURACION ANIDADA
const { direccion: { pais } } = persona; // Desestructuración anidada para obtener el país
console.log(pais); // Imprime 'España'
const { hobbies: [hobbyA] } = persona2; // Desestructuración anidada para obtener los primeros dos hobbies
console.log(hobbyA); // Imprime 'pintar'








/* STRINGS */

let comillaDoble = "HOLA";
let comillaSimple = 'HOLA';
let comillaInvertida = `HOLA`;

// Baclticks o comillas invertidas se utilizan para crear plantillas literales

let edad = 28;
let nombre = "Emilio";

let saludo = `Hola, mi nombre es ${nombre} y tengo ${edad + 1} años.`;
// Hola, mi nombre es Emilio y tengo 29 años.

// La comilla invertida es muy similiar a los f strings de python


// COMO LOS STRING SON LISTAS DE CARACTERES, PUEDO HACER LO SIGUIENTE

let palabra = "Hola Mundo";
// OBTENER LA LONGITUD DE UN STRING
console.log(palabra.length); // 10
// OBTENER UN CARACTER EN UNA POSICION
console.log(palabra[0]); // H
// OBTENER CON charAt
console.log(palabra.at(0)); // H

// OBTENER EL ULTIMO CARACTER
console.log(palabra[palabra.length - 1]); // o
// OBTENER EL ULTIMO CARACTER CON charAt
console.log(palabra.charAt(palabra.length - 1)); // o

// Para obtener por valores negativos .at
console.log(palabra.at(-1)); // o
console.log(palabra.at(-2)); // d


//METDOS DE LOS STRINGS
let frase = "Hola Mundo";
// CONVERTIR A MAYUSCULAS
console.log(frase.toUpperCase()); // HOLA MUNDO
// CONVERTIR A MINUSCULAS
console.log(frase.toLowerCase()); // hola mundo

// RECORTAR ESPACIOS AL PRINCIPIO Y AL FINAL
let fraseConEspacios = "   Hola Mundo   ";
console.log(fraseConEspacios.trim()); // Hola Mundo

// Ver si incluye una subcadena
console.log(frase.includes("Mundo")); // true

// Ver si empieza con una subcadena
console.log(frase.startsWith("Hola")); // true

// Ver si termina con una subcadena
console.log(frase.endsWith(".docx")); // false


// Extraer una subcadena
console.log(frase.slice(0, 4)); // Hola
console.log(frase.slice(5)); // Mundo

console.log(frase.substring(0, 4)); // Hola
console.log(frase.substring(5)); // Mundo

// Reemplazar una subcadena
console.log(frase.replace("Mundo", "JavaScript")); // Hola JavaScript

// Particionar un string en un array
let lista = "Manzana,Pera,Naranja";
console.log(lista.split(",")); // [ 'Manzana', 'Pera', 'Naranja' ]

// Concatenar strings
let str1 = "Hola";
let str2 = "Mundo";
// Usando el operador +
let concatenado = str1 + " " + str2;
console.log(concatenado); // Hola Mundo
// Usando el método concat
let concatenado2 = str1.concat(" ", str2);
console.log(concatenado2); // Hola Mundo
// Repetir un string
let repetido = str1.repeat(3);
console.log(repetido); // HolaHolaHola  

// Comillas dentro de un string

// Usar el carácter de escape \
let comillas = "Ella dijo: \"Hola Mundo\"";
console.log(comillas); // Ella dijo: "Hola Mundo"

// Usar comillas simples dentro de comillas dobles
let comillas2 = 'Ella dijo: "Hola Mundo"';
console.log(comillas2); // Ella dijo: "Hola Mundo"
// Usar comillas dobles dentro de comillas simples
let comillas3 = "Ella dijo: 'Hola Mundo'";
console.log(comillas3); // Ella dijo: 'Hola Mundo'
// Usar comillas invertidas para evitar el escape
let comillas4 = `Ella dijo: "Hola Mundo"`;
console.log(comillas4); // Ella dijo: "Hola Mundo"

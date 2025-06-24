

/* VARIABLES */

/* VARIABLES BÁSICAS / PLANAS */

// Variables numéricas para almacenar cualquier tipo de número, ya sea entero, decimal o negativo.
let numeroEntero = 42;
let numeroDecimal = 3.14;
let numeroNegativo = -7;

// Variables de texto (cadenas de caracteres) para almacenar palabras o frases.
let textoSimple = "Hola, mundo!";
let textoConComillas = 'Este es un texto con "comillas dobles" dentro de comillas simples.';
let textoConComillasSimples = "Este es un texto con 'comillas simples' dentro de comillas dobles.";
let textoConComillasDiagona = `Este es un texto que concatenar variables: ${numeroEntero} y ${numeroDecimal}.`;

// Variables booleanas para almacenar valores de verdadero o falso.
let verdadero = true;
let falso = false;


/* VARIABLES COMPLEJAS */
// Listas

// Objectos



/* OPERADORES */


// Aritmética básica
let suma = 4 + 14; // Suma de dos números (4 y 14) = 18
let resta = 10 - 3; // Resta de dos números (10 y 3) = 7
let multiplicacion = 5 * 6; // Multiplicación de dos números (5 y 6) = 30
let division = 20 / 4; // División de dos números (20 y 4) = 5
let modulo = 10 % 3; // Módulo de dos números (10 y 3) = 1 (el resto de la división)

// Asignación Compuesta
let numero = 10; // Asignación inicial =
numero = 14; // Reasignación del valor a 14
numero += 5; // Suma y asigna: numero = numero + 5 (ahora numero es 19)
numero -= 3; // Resta y asigna: numero = numero - 3 (ahora numero es 16)
numero *= 2; // Multiplica y asigna: numero = numero * 2 (ahora numero es 32)
numero /= 4; // Divide y asigna: numero = numero / 4 (ahora numero es 8)
numero %= 3; // Módulo y asigna: numero = numero % 3 (ahora numero es 2)

// Aplican los principios de la jerarquia de operaciones
let resultado = 5 + 3 * 2; // Primero se multiplica, luego se suma. Resultado: 11
let resultado2 = (5 + 3) *  2; // Primero se suma, luego se multiplica. Resultado: 16


// Operaciones entre cadenas de texto
let texto1 = "Hola";
let texto2 = "Mundo";
let textoConcatenado = texto1 + " " + texto2; // Concatenación de cadenas. Resultado: "Hola Mundo"
textoConcatenado += "!"; // Agrega un signo de exclamación al final. Resultado: "Hola Mundo!"

// IMPRIMIR RESULTADOS EN CONSOLA
console.log("Número Entero:", numeroEntero);
console.log("Número Decimal:", numeroDecimal);
console.log("Número Negativo:", numeroNegativo);
console.log("Texto Simple:", textoSimple);
console.log("Texto con Comillas Dobles:", textoConComillas);
console.log("Texto con Comillas Simples:", textoConComillasSimples);
console.log("Texto con Comillas Diagonales:", textoConComillasDiagona);
console.log("Texto Concatenado:", textoConcatenado);



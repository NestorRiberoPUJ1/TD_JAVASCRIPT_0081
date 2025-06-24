/* CONDICIONALES */

//OPERADORES DE COMPARACION

console.log(5 == 5); // igualdad -> true si son iguales
console.log(5 == '5'); // igualdad -> true porque compara valor, no tipo
console.log(5 === 5); // igualdad estricta -> true si son iguales y del mismo tipo
console.log(5 === '5'); // igualdad estricta -> false porque son de tipos diferentes

console.log(5 != 6); // desigualdad -> true si son diferentes
console.log(5 != '5'); // desigualdad -> false porque compara valor, no tipo
console.log(5 !== 6); // desigualdad estricta -> true si son diferentes o de tipos diferentes
console.log(5 !== '5'); // desigualdad estricta -> true porque son de tipos diferentes

console.log(5 < 6); // menor que -> true si 5 es menor que 6
console.log(5 > 6); // mayor que -> false si 5 no es mayor que 6
console.log(5 <= 6); // menor o igual que -> true si 5 es menor o igual que 6
console.log(5 >= 6); // mayor o igual que -> false si 5 no es mayor o igual que 6


// EJEMPLO

// CONDICIONAL SIMPLE

let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}
else {
    console.log("Eres menor de edad");
}

if (edad >= 65) {
    console.log("Eres un adulto mayor");
} else if (edad >= 30) {
    console.log("Eres un adulto");
} else if (edad >= 18) {
    console.log("Eres un adulto joven");
} else {
    console.log("Eres un menor de edad");
}

// OPERADORES LÓGICOS

// AND (&&) -> true si ambos son verdaderos
console.log(true && true); // AND -> true si ambos son verdaderos
console.log(true && false); // AND -> false si al menos uno es falso
console.log(false && false); // AND -> false si ambos son falsos

// OR (||) -> true si al menos uno es verdadero
console.log(true || true); // OR -> true si al menos uno es verdadero
console.log(true || false); // OR -> true si al menos uno es verdadero
console.log(false || false); // OR -> false si ambos son falsos

// NOT (!) -> invierte el valor booleano
console.log(!true); // NOT -> false
console.log(!false); // NOT -> true

// CONDICIONAL COMPUESTA

let edad2 = 20;

if (edad2 >= 18 && edad2 < 35) { // Verifica si la edad está entre 18 y 34
    console.log("Puedes participar en el torneo de jóvenes");
} else if (edad2 >= 35 && edad2 < 65) { // Verifica si la edad está entre 35 y 64
    console.log("Puedes participar en el torneo de adultos");
}
else if (edad2 >= 65) { // Verifica si la edad es 65 o más
    console.log("Puedes participar en el torneo de adultos mayores");
}
else { // Si no cumple ninguna de las condiciones anteriores
    console.log("No puedes participar en el torneo");
}

if (edad <= 18 || edad >= 65) { // Verifica si la edad es menor o igual a 18 o mayor o igual a 65
    console.log("No puedes participar en el torneo la edad permitida es entre 19 y 64 años");
}

// EJEMPLO 2

let genero = "femenino";
let edad3 = 25;

if (genero === "femenino" && edad3 >= 18) { // Verifica si el género es femenino y la edad es 18 o más
    console.log("Puedes participar en las olimpiadas femeninas");
} else if (genero == "masculino" && edad3 >= 18) { // Verifica si el género es masculino y la edad es 18 o más
    console.log("Puedes participar en las olimpiadas masculinas");
} else { // Si no cumple ninguna de las condiciones anteriores
    console.log("No puedes participar en las olimpiadas");
}
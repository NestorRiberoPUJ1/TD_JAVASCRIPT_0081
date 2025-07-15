
// CONDICIONALES DEPENDEN DE LOS OPERADORES DE COMPARACION Y LOGICOS

// OPERADORES DE COMPARACION
// == Igualdad compara valor
console.log(5 == 5); // true
console.log(5 == '5'); // true (compara valor, no tipo)
console.log(5 == 6); // false
// === Igualdad estricta compara valor y tipo
console.log(5 === 5); // true
console.log(5 === '5'); // false (compara valor y tipo)
console.log(5 === 6); // false
// != Desigualdad compara valor
console.log(5 != 6); // true
console.log(5 != '5'); // false (compara valor, no tipo)
// !== Desigualdad estricta compara valor y tipo
console.log(5 !== 6); // true
console.log(5 !== '5'); // true (compara valor y tipo)
// > Mayor que
console.log(5 > 3); // true
console.log(5 > 5); // false
console.log(5 > 6); // false
// < Menor que
console.log(5 < 3); // false
console.log(5 < 5); // false
console.log(5 < 6); // true
// >= Mayor o igual que
console.log(5 >= 3); // true
console.log(5 >= 5); // true
console.log(5 >= 6); // false
// <= Menor o igual que
console.log(5 <= 3); // false
console.log(5 <= 5); // true
console.log(5 <= 6); // true

// OPERADORES LOGICOS
// && AND lógico (y) es verdadero si ambos operandos son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
// || OR lógico (o) es verdadero si al menos uno de los operandos es verdadero
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// ! NOT lógico (negación) invierte el valor de verdad
console.log(!true); // false
console.log(!false); // true

// TODOS LOS CONDICIONALES DEBEN PLANTEAR UNA PREGUNTA CON RESPUESTA VERDADERA O FALSA


// ESTRUCTURA DE UN CONDICIONAL

// PREGUNTA INCIAL (OBLIGATORIA) -> IF
// PREGUNTAS SECUNDARIAS (OPCIONALES) -> ELSE IF
// CASO POR DEFECTO (OPCIONAL) -> ELSE

// EJEMPLO DE CONDICIONAL
// Está lloviendo? si o no
// si es verdadero, entonces llevar paraguas
// Si no está lloviendo pero hace mucho sol, entonces llevar gafas de sol
// Si no hace mucho sol pero hace frío, entonces llevar abrigo
// Si no pasa nada de lo anterior, entonces me voy con ropa ligera

let estaLloviendo = true;
let haceSol = false;
let haceFrio = false;

if (estaLloviendo == true) {
    console.log("Llevar paraguas");
} else if (haceSol == true) {
    console.log("Llevar gafas de sol");
} else if (haceFrio == true) {
    console.log("Llevar abrigo");
} else {
    console.log("Llevar ropa ligera");
}

// PREGUNTAS COMBINADAS
// Está lloviendo y hace sol? si o no
// si es verdadero, entonces llevar paraguas y gafas de sol
// si no, entonces salgo con ropa ligera

if (estaLloviendo == true && haceSol == true) {
    console.log("Llevar paraguas y gafas de sol");
} else {
    console.log("Llevar ropa ligera");
}

if (estaLloviendo || haceFrio) {
    console.log("Llevar abrigo");
}


let temperatura = 25;
let estaCallendoAgua = false;


if (temperatura >= 20 && !estaCallendoAgua) {
    console.log("¡Este es un buen día para dar un paseo!");
}

// LEERLA CON LOS VALORES PUESTOS
// 25 >= 20 && !false -> true && true -> true
// LEERLA SEGUN LA INTENCION DEL PROGRAMADOR
// Si la temperatura es mayo o igual a 20 y no está callendo agua

// condicion izquierda es verdadera y la derecha es verdadera
// Temperatura ideal y no llueve
// Si está lloviendo la variable estaCallendoAgua es true
// Si no está lloviendo la variable estaCallendoAgua es false


// CONDICIONES DE BORDE

// Son casos que pueden dar lugar a errores si no se tienen en cuenta

let humedad = 10; // Porcentaje de humedad
let temperaturaExterior; // Temperatura exterior en grados Celsius
console.log(temperaturaExterior / humedad); // Esto puede dar un error de división por cero si humedad es 0

if (humedad === 0) {
    console.log("La humedad es cero, no se puede calcular el clima.");
} else if (temperaturaExterior / humedad >= 1) {
    console.log("El clima es seco, puedes salir sin paraguas.");
}
else if (temperaturaExterior / humedad < 1) {
    console.log("El clima es húmedo, es mejor llevar paraguas.");
} else {
    console.log("No se puede determinar el clima. Por favor, verifica los datos.");
}

if (humedad != 0 && temperaturaExterior / humedad >= 1) {
    console.log("El clima es seco, puedes salir sin paraguas.");
}
else if (humedad != 0 && temperaturaExterior / humedad < 1) {
    console.log("El clima es húmedo, es mejor llevar paraguas.");
}
else {
    console.log("No se puede determinar el clima. Por favor, verifica los datos.");
}
/*  OBJETIVO RECIBIR VALORES DE VARIABLES POR INTERACCIÓN DE CONSOLA */
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


async function leerDelUsuario(pregunta){
    const rl = readline.createInterface({ input, output });
    const respuesta = await rl.question(pregunta);
    rl.close();
    return respuesta;       
}

let nombre = await leerDelUsuario('¿Cuál es tu nombre? ');
console.log(`Hola ${nombre}, bienvenido a la evaluación del módulo 3.`);

let edad = parseInt(await leerDelUsuario('¿Cuál es tu edad? '));
if (isNaN(edad)) {
    console.log('Por favor, ingresa un número válido para la edad.');
}
else {
    console.log(`Tienes ${edad} años.`);
}



let usuario={
    nombre : await leerDelUsuario('¿Cuál es tu nombre? '),
    edad : parseInt(await leerDelUsuario('¿Cuál es tu edad? ')),
    pais: await leerDelUsuario('¿Cuál es tu país? '),
}

console.log(usuario);


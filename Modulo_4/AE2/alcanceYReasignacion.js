/* ALCANCE Y REASIGNACION */



// global esta creado directo en el archivo y no esta dentro de ninguna llave


let global = "global";

function funcion1() {
    console.log(global); // Imprime "global"
    let local = "local";
    console.log(local); // Imprime "local"
}


funcion1();
console.log(global); // Imprime "global"

while (Math.random() < 0.9) {
    let local = "local dentro de while";
    console.log(local); // Imprime "local dentro de while"
}
// console.log(local); // Error: local is not defined, ya que local no esta definido

for (let i = 0; i < 5; i++) {
    let local = "local dentro de for";
    console.log(local, i); // Imprime "local dentro de for"
}


const var1 = [1, 2, 3, 4, 5];
const var2 = ['a', 'b', 'c', 'd', 'e'];

// 1 a-b-c-d-e 2 a-b-c-d-e 3 a-b-c-d-e 4 a-b-c-d-e 5 a-b-c-d-e

for (let i = 0; i < var1.length; i++) {
    for (let j = 0; j < var2.length; j++) {
        console.log(var1[i], var2[j]);
    }
}


// REASIGNACION DE VARIABLES
let variable = "valor inicial"; // Asignación de variable
variable = "nuevo valor"; // Reasignación de variable
var otraVariable = "otro valor"; // Asignación de variable global
otraVariable = "nuevo valor global"; // Reasignación de variable global

const constante = "valor constante"; // Asignación de constante
// constante = "nuevo valor constante"; // Error: No se puede reasignar una constante

const objetoConstante = { clave: "valor" }; // Asignación de objeto constante
const arregloConstante = [1, 2, 3]; // Asignación de arreglo constante
objetoConstante.clave = "nuevo valor"; // Se puede modificar el contenido del objeto
arregloConstante.push(4); // Se puede modificar el contenido del arreglo
console.log(variable, otraVariable, constante, objetoConstante, arregloConstante); // Imprime los valores actuales
arregloConstante[0] = 10; // Se puede modificar el contenido del arreglo
console.log(arregloConstante); // Imprime [10, 2, 3, 4]

let var4; // Declaración de variable sin asignación
var4 = "valor asignado"; // Asignación posterior


const funcionFlecha = () => {
    console.log("Soy una función flecha");
};

console.log(funcionFlecha);
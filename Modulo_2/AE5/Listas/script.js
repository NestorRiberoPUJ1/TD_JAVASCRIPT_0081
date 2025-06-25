

/* LISTAS */

// Estructura de una lista: tipoVariable nombre = [elemento1, elemento2, elemento3, ...];

// Lista de grupos musicales
let gruposMusicales = ["Grupo Firme", "The Beatles", "Soda Stereo", "Los Bukis", "Bad Omens", "Red Hot Chili Peppers", "Los Prisioneros"];
// Agregar un nuevo grupo al final de la lista
gruposMusicales.push("Metallica");
// Eliminar el último grupo de la lista
gruposMusicales.pop();
// Eliminar el primer grupo de la lista
gruposMusicales.shift();
// Agregar un nuevo grupo al inicio de la lista
gruposMusicales.unshift("Los Ángeles Azules");
console.log(gruposMusicales);

// Acceder a un grupo específico por su índice
let grupoEspecifico = gruposMusicales[2];
console.log("Grupo específico:", grupoEspecifico);
// Modificar un grupo específico
gruposMusicales[2] = "Gustavo Cerati";
console.log("Lista modificada:", gruposMusicales);

// Longitud de la lista
let longitudLista = gruposMusicales.length;
console.log("Longitud de la lista:", longitudLista);

// Invertir el orden de la lista
gruposMusicales.reverse();
console.log("Lista invertida:", gruposMusicales);

// Buscar un grupo específico
let indiceGrupo = gruposMusicales.indexOf("Bad Omens");
console.log("Índice de 'Bad Omens':", indiceGrupo);



// Iteración de la lista
// Iterador clásico con for
for (let i = 0; i < gruposMusicales.length; i++) {
    console.log("Grupo en la posición", i, ":", gruposMusicales[i]);
}
// Iterador forEach
gruposMusicales.forEach((grupo, index) => {
    console.log("Grupo en la posición", index, ":", grupo);
});


// Listas constantes

let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; // Creo
diasSemana = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; // Reasigno
console.log("Días de la semana en inglés:", diasSemana);

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; // Creo una constante
weekDays.shift();
weekDays.unshift("Lunes");


console.log("Días de la semana en español:", weekDays); // Esto no se ejecutará debido al error anterior
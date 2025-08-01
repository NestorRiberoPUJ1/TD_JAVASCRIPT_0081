/* OBJETOS INMUTABLES */

const listaMercado = [
    "pan",
    "leche",
    "huevos",
    "queso",
    "carne",
    "frutas",
    "verduras",
    "cereales",
    "pescado",
];

listaMercado.push("aceite");
console.log(listaMercado);

const listaMercadoInmutable = Object.freeze(listaMercado);
// listaMercadoInmutable.push("azúcar"); // No se puede modificar
console.log(listaMercadoInmutable);

// Para poderlo utilizar y tener mutabilidad, se puede crear una copia
const listaMercadoMutable = [...listaMercadoInmutable];
listaMercadoMutable.push("azúcar"); // Ahora sí se puede modificar
console.log(listaMercadoMutable);

// Slice
const listaMercadoSlice = listaMercadoInmutable.slice();    
listaMercadoSlice.push("sal"); // También se puede modificar
console.log(listaMercadoSlice);


const { areaCirculo } = require('./funcionesGeometricas'); // Importar solo funciones específicas del módulo funcionesGeometricas
const funcionesCalculo1 = require('./funcionesCalculo1'); // Importar el módulo funcionesCalculo1

let areaCirculo1 = areaCirculo(5);

let pendiente = funcionesCalculo1.pendiente(1, 2, 3, 4);

console.log(`El área del círculo es: ${areaCirculo1}`);
console.log(`La pendiente de la línea es: ${pendiente}`);
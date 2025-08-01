import cinematica from './cinematica.js'; // Importando el módulo cinematica
import { movimientoRectilineoUniforme } from './cinematica2.js'; // Importando funciones específicas del módulo cinematica2

import { areaCirculo, perimetroCirculo } from '../ModularizacionRequire/funcionesGeometricas.js'; // Importando funciones de geometría


let distancia = 100; // Distancia en metros
let tiempo = 5; // Tiempo en segundos
let velocidad = cinematica.velocidad(distancia, tiempo); // Calculando velocidad
console.log(`La velocidad es: ${velocidad} m/s`);

let radio = 7; // Radio del círculo en metros
let area = areaCirculo(radio); // Calculando área del círculo
let perimetro = perimetroCirculo(radio); // Calculando perímetro del círculo
console.log(`El área del círculo es: ${area} m²`);
console.log(`El perímetro del círculo es: ${perimetro} m`);
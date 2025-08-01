/* SPREAD REST */


const a = [1, 2, 3, 4, 5]; // Agrega el número 6 al final del arreglo
let b = a;
b.push(6);
console.log(a, b);
b = [3, 4, 5, 6];

// Usando el operador spread para crear una copia de un arreglo
let c = [...a];
c.push(7);
console.log(a, b, c);

const d = { nombre: 'Juan', edad: 30 }; // Agrega una nueva propiedad 'pais' al objeto
let e = { ...d };
e.pais = 'España';
console.log(d, e);


// Copias Superficiales

const obj = { edad: 30, nombre: 'Juan', direccion: { ciudad: 'Madrid', pais: 'España' } };
let obj2 = { ...obj };
obj2.edad = 31;
obj2.direccion.ciudad = 'Barcelona'; // Modifica una propiedad anidada
console.log(obj, obj2);

// Copias profundas
let obj3 = {
    ...obj,
    direccion: { ...obj.direccion } // Crea una copia profunda de la propiedad 'direccion'
};
obj3.direccion.ciudad = 'Valencia'; // Modifica la copia profunda
console.log(obj, obj3);

let obj4 = JSON.parse(JSON.stringify(obj)); // Crea una copia profunda usando JSON Más eficiente en algunos casos con objetos anidados
obj4.direccion.ciudad = 'Sevilla'; // Modifica la copia profunda
console.log(obj, obj4);

let obj5 = structuredClone(obj); // Crea una copia profunda usando structuredClone (disponible en navegadores modernos)
obj5.direccion.ciudad = 'Bilbao'; // Modifica la copia profunda
console.log(obj, obj5);




// REST

const [x, y, ...z] = [1, 2, 3, 4, 5]; // Asigna los primeros dos elementos a x e y, y el resto a z
console.log(x, y, z);

const { nombre, ...restante } = { nombre: 'Juan', edad: 30, pais: 'España' }; // Asigna 'nombre' a una variable y el resto a 'resto'
console.log(nombre, restante);
const { edad: age, ...restante2 } = restante // Asigna 'edad' a una variable y el resto a 'restante2'
console.log(age, restante2);

z.map((num) => console.log(num)); // Imprime los números restantes en z 

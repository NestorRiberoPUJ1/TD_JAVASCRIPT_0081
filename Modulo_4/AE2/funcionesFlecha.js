/* FUNCIOONES FLECHA */


const funcion = () => "resultado";

console.log(funcion()); // Imprime "resultado"

const sumarNumeros = (a, b) => a + b;
console.log(sumarNumeros(5, 10)); // Imprime 15

// REDEFINIERON EL USO DE LAS FUNCIONES ANONIMAS

let arreglo = [1, 2, 3, 4, 5];
arreglo.forEach((elemento) => console.log(elemento * 2)); // Imprime 2, 4, 6, 8, 10

// EQUIVALENCIA A FUNCIONES ANONIMAS TRADICIONALES
arreglo.forEach(function (elemento) {
    console.log(elemento * 2);
}); // Imprime 2, 4, 6, 8, 10

console.log("-----------------");
const triplicar = (numero) => console.log(numero * 3);
triplicar(4); // Imprime 12
arreglo.forEach(triplicar); // Imprime 3, 6, 9, 12, 15


class EquipoFutbol {
    constructor(nombre, ciudad) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.mostrarInformacion = () => {
            console.log(`Equipo: ${this.nombre}, Ciudad: ${this.ciudad}`);
        };
    }

    mostrar() {
        this.mostrarInformacion();
    }

    mostrar2 = () => {
        console.log(`Equipo: ${this.nombre}, Ciudad: ${this.ciudad}`);
    }
}

let ab = new EquipoFutbol("Atlético Bucaramanga", "Bucaramanga");
ab.mostrarInformacion();
ab.mostrar(); // Imprime "Equipo: Atlético Bucaramanga, Ciudad: Bucaramanga"
ab.mostrar2(); // Imprime "Equipo: Atlético Bucaramanga, Ciudad: Bucaramanga"


const atleticoBucaramanga = {
    nombre: "Atlético Bucaramanga",
    ciudad: "Bucaramanga",
    mostrarInformacion: function () {
        console.log(`Equipo: ${this.nombre}, Ciudad: ${this.ciudad}`);
    },
    /* NO PERMITE HEREDAR CONTEXTO */
    mostrar2: () => {
        console.log(`Equipo: ${this.nombre}, Ciudad: ${this.ciudad}`);
    }
};
atleticoBucaramanga.mostrarInformacion(); // Imprime "Equipo: Atlético Bucaramanga, Ciudad: Bucaramanga"
atleticoBucaramanga.mostrar2(); // Imprime "Equipo: undefined,


/* *args */
const prueba = (...args) => {
    console.log(args); // Imprime los argumentos pasados como un arreglo
}

prueba(1, 2, 3, 4); // Imprime [1, 2, 3, 4]
prueba("a", "b", "c"); // Imprime ["a", "b  ", "c"]


// No pueden ser utilizadas como constructores
// const nuevaFuncion = new funcion(); 

console.log("-----------------");

const constructor1 = (a, b) => {
    return (
        {
            a: a,
            b: b,
            sumar: () => a + b,

        }
    );
};
const instancia1 = constructor1(5, 10);
console.log(instancia1.sumar()); // Imprime 15
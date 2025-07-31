/* PROGRAMACIÓN ORIENTADA A OBJETOS */


// Syntaxis para crear una clase
// class NombreDeLaClase{
// constructor
// metodos
// }

class Deportista {

    // Constructor es un método especial que se ejecuta al crear una instancia de la clase
    // Se utiliza para inicializar las propiedades del objeto
    constructor(nombre, velocidad, saltoVertical, fuerza, altura, peso, cardio, agresividad) {
        this.nombre = nombre;
        this.velocidad = velocidad;
        this.saltoVertical = saltoVertical;
        this.fuerza = fuerza;
        this.altura = altura;
        this.peso = peso;
        this.cardio = cardio;
        this.agresividad = agresividad;
    }


    // Metodos son acciones comunes que los objetos de esta clase pueden realizar
    correr() {
        console.log(`${this.nombre} corre a una velocidad de ${this.velocidad} m/s`);
    }
    saltar() {
        console.log(`${this.nombre} salta a una altura de ${this.saltoVertical} metros`);
    }
    levantarPesas() {
        console.log(`${this.nombre} levanta ${this.fuerza} kg de peso`);
    }
}



// CREAMOS INSTANCIAS DE LA CLASE

const happyGilmore = new Deportista("Happy Gilmore", 4, 2.2, 100, 175, 80, 90, 100);
const rockyBalboa = new Deportista("Rocky Balboa", 3, 2.4, 120, 180, 85, 95, 90);

console.log("Happy Gilmore:", happyGilmore);
console.log("Rocky Balboa:", rockyBalboa);

// LLAMAMOS A LOS METODOS DE LAS INSTANCIAS
happyGilmore.correr();
rockyBalboa.saltar();


// HERENCIA: se refiere a la capacidad de una clase de heredar propiedades y métodos de otra clase

class Golfista extends Deportista {

    constructor(nombre, velocidad, saltoVertical, fuerza, altura, peso, cardio, agresividad, precision, mentalidad, concentracion) {
        // Llamamos al constructor de la clase padre (Deportista) usando super()
        super(nombre, velocidad, saltoVertical, fuerza, altura, peso, cardio, agresividad);
        // Inicializamos las propiedades específicas de la clase Golfista
        this.precision = precision;
        this.mentalidad = mentalidad;
        this.concentracion = concentracion;
    }

    // SE HACE UNA HERENCIA DE TODOS LOS METODOS DE LA CLASE PADRE (Deportista)
    // Correr, saltar, levantarPesas

    // Podemos agregar nuevos métodos específicos de la clase Golfista
    jugarGolf() {
        console.log(`${this.nombre} juega golf con una precisión de ${this.precision} y una mentalidad de ${this.mentalidad}`);
    }
    concentrarse() {
        console.log(`${this.nombre} se concentra con un nivel de ${this.concentracion}`);
    }
    buscarBolsa() {
        super.correr(); // Llama al método correr de la clase padre
        console.log(`${this.nombre} busca su bolsa de golf`);
    }

    // Podemos sobrescribir métodos de la clase padre si es necesario
    correr() {
        console.log(`${this.nombre} camina a una velocidad de ${this.velocidad} m/s `);
    }
}

let happyGilmoreGolfista = new Golfista("Happy Gilmore 2", 4, 2.2, 100, 175, 80, 90, 100, 95, 85, 90);

happyGilmoreGolfista.correr();
happyGilmoreGolfista.jugarGolf();
happyGilmoreGolfista.concentrarse();

happyGilmoreGolfista.buscarBolsa();


//ENCAPSULAMIENTO
class Boxeador {

    constructor(nombre, peso_inicial, altura, fuerza) {
        this.nombre = nombre;
        let peso = peso_inicial; // Propiedad privada
        this.altura = altura;

        // Método privado
        this.entrenar = function () {
            peso += 1; // Aumenta el peso del boxeador
            console.log(`${this.nombre} ha entrenado y ahora pesa ${peso} kg`);
        }
        this.getPeso = function () {
            return peso; // Método para acceder al peso privado
        }

    }

    descansar() {
        console.log(`${this.nombre} está descansando para recuperarse`);
        peso -= 1; // Disminuye el peso del boxeador
        console.log(`${this.nombre} ahora pesa ${peso} kg`);
    }

}

console.log("--------------------------------");
let apolloCreed = new Boxeador("Apollo Creed", 90, 180, 100);
apolloCreed.entrenar();
console.log(apolloCreed.nombre);
let pesoActual = apolloCreed.getPeso(); // Acceso al método para obtener el peso
console.log(`Peso actual de ${apolloCreed.nombre}: ${pesoActual} kg`);
pesoActual = 95; // No se puede modificar directamente el peso, ya que es privado
console.log(apolloCreed.getPeso()); // Muestra el peso actual


function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.saludar = function () {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}
let persona1 = new Persona("Juan", 30);

Persona.prototype.presentarse = function () {
    console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años de edad.`);
}
persona1.presentarse(); // Muestra el mensaje de presentación
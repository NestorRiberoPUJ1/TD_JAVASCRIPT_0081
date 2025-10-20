

class Computador {

    constructor(marca, procesador, modelo,ram) {
        this.marca = marca;
        this.procesador = procesador;
        this.modelo = modelo;
        this.ram = ram
    }

    // Métodos 

    mostrarInfo() {
        console.table(this);
    }

    get getRam(){
        return this.ram;
    }
    set setRam(nuevaRam){
        if(typeof nuevaRam !== 'number' || nuevaRam <= 0) {
            console.error('La RAM debe ser un número positivo.');
            return;
        }
        this.ram = nuevaRam;
    }

    // Otros métodos pueden ser añadidos aquí
    expandirRam() {
        this.ram += 8; // Expande la RAM en 8 GB
    }

}

const miComputador = new Computador('Lenovo', 'Intel i7', 'ThinkPad X1',16);
miComputador.mostrarInfo();
let ramActual = miComputador.getRam;
console.log(`RAM actual: ${ramActual} GB`);
ramActual = 32;
miComputador.mostrarInfo(); // La RAM no debería cambiar
miComputador.setRam = 64; // Actualizando la RAM
miComputador.mostrarInfo(); // La RAM debería reflejar el cambio
console.log(`RAM actualizada: ${miComputador.getRam} GB`);
miComputador.expandirRam();
miComputador.mostrarInfo(); // La RAM debería reflejar la expansión

const computadorClases = new Computador('Apple', 'M4', 'MacBook Air', 32);
const computadorProgramacion = new Computador('Apple', 'M4', 'Mac Mini', 128);
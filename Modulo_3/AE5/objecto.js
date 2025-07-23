/* OBJECTOS */


let pelicula = {
  nombre: "Interstellar",
  duracion: 240,
  director: "Christopher Nolan",
  genero: "Ciencia Ficción",
  actores: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
  clasificacion: "A",
  reproducir: function () {
    let fecha = new Date();
    console.log("Pelicula inciando a las " + fecha.getHours() + ":" + fecha.getMinutes());
    console.log("Reproduciendo " + this.nombre);
    console.log("Duración: " + this.duracion + " minutos");
    console.log("Director: " + this.director);
    let horaFinal = new Date(fecha.getTime() + this.duracion * 60000);
    console.log("Hora de finalización: " + horaFinal.getHours() + ":" + horaFinal.getMinutes());
  },
  venderBoleto: function (cantidad, edad) {
    if (this.clasificacion === "A" || edad >= 18) {
      console.log("Vendiendo " + cantidad + " boletos");
    }
    else {
      console.log("No se pueden vender boletos a menores de edad para esta película");
    }
  }
}

let pelicula2 = {
  nombre: "Inception",
  duracion: 148,
  director: "Christopher Nolan",
  genero: "Ciencia Ficción",
  actores: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "E lliot Page"],
  clasificacion: "A",
  reproducir: function () {
    let fecha = new Date();
    console.log("Pelicula inciando a las " + fecha.getHours() + ":" + fecha.getMinutes());
    console.log("Reproduciendo " + this.nombre);
    console.log("Duración: " + this.duracion + " minutos");
    console.log("Director: " + this.director);
    let horaFinal = new Date(fecha.getTime() + this.duracion * 60000);
    console.log("Hora de finalización: " + horaFinal.getHours() + ":" + horaFinal.getMinutes());
  },
  venderBoleto: function (cantidad, edad) {
    if (this.clasificacion === "A" || edad >= 18) {
      console.log("Vendiendo " + cantidad + " boletos");
    }
    else {
      console.log("No se pueden vender boletos a menores de edad para esta película");
    }
  }
}

// Propiedades son : nombre, duracion, director, genero, actores, clasificacion
// Métodos son : reproducir, venderBoleto

console.log("--------------- POR PUNTO ---------------");
// ACCESO A PROPIEDADES Y MÉTODOS a través del punto
console.log("Nombre de la película: " + pelicula.nombre);
console.log("Duración de la película: " + pelicula.duracion + " minutos");

pelicula.reproducir(); // Llama al método reproducir del objeto pelicula
pelicula.venderBoleto(2, 20); // Llama al método venderBoleto del objeto pelicula

console.log("--------------- POR CORCHETES ---------------");
//ACCESO A PROPIEDADES Y MÉTODOS a través de corchetes
console.log("Director de la película: " + pelicula["director"]);
console.log("Género de la película: " + pelicula["genero"]);
pelicula["reproducir"](); // Llama al método reproducir del objeto pelicula usando corchetes
pelicula["venderBoleto"](2, 20); // Llama al método venderBoleto del objeto pelicula usando corchetes


// QUEREMOS CREAR UNA FUNCION QUE RECIBA UN OBJECTO Y EL NOMBRE DE UNA PROPIEDAD PARA VERLAR
function verPropiedad(objeto, propiedad) {
  console.log(objeto[propiedad])
}


verPropiedad(pelicula, "nombre"); // Llama a la función verPropiedad con el objeto pelicula y la propiedad "nombre"

pelicula.reproducir(); // Llama al método reproducir del objeto pelicula
pelicula2.reproducir(); // Llama al método reproducir del objeto pelicula2


console.log(pelicula.director.toUpperCase()); // Convierte el nombre del director a mayúsculas



let ingredientes =["lechuga", "tomate", "cebolla", "queso", "tocino"];

let unidos = ingredientes.join(", ");
let conComillas = ingredientes.map(ingrediente => `"${ingrediente}"`).join("-");
console.log(unidos); // Imprime: lechuga, tomate, cebolla, queso, tocino
console.log(conComillas); // Imprime: "lechuga""tomate""cebolla


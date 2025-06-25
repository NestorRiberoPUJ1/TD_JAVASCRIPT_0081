

let theBeatles = {
    nombre: "The Beatles",
    integrantes: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
    genero: "Rock",
    añoFormacion: 1960,
    añoSeparacion: 1970,
    canciones: [
        { titulo: "Hey Jude", año: 1968 },
        { titulo: "Let It Be", año: 1970 },
        { titulo: "Yesterday", año: 1965 }
    ],
    tocarCanciones: function () {
        this.canciones.forEach(cancion => {
            console.log(`Tocando: ${cancion.titulo}`);
        });
    }
};

let rollingStones = {
    nombre: "The Rolling Stones",
    integrantes: ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"],
    genero: "Rock",
    añoFormacion: 1962,
    añoSeparacion: null, // Aún activos
    canciones: [
        { titulo: "Paint It Black", año: 1966 },
        { titulo: "Sympathy for the Devil", año: 1968 },
        { titulo: "(I Can't Get No) Satisfaction", año: 1965 }
    ],
    tocarCanciones: function () {
        this.canciones.forEach(cancion => {
            console.log(`Tocando: ${cancion.titulo}`);
        });
    }
};

// acceder a las propiedades del objeto theBeatles
console.log(theBeatles.nombre); // "The Beatles"
console.log(theBeatles["integrantes"]); // ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
theBeatles.tocarCanciones(); // Llama al método tocarCanciones del objeto theBeatles

// acceder a las propiedades del objeto rollingStones
console.log(rollingStones.nombre); // "The Rolling Stones"
console.log(rollingStones["integrantes"]); // ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"]
rollingStones.tocarCanciones(); // Llama al método tocarCanciones del objeto rollingStones

// Buscar a john lennon en theBeatles

let buscarIntegrante = theBeatles.integrantes.indexOf("John Lennon");
console.log(buscarIntegrante); // 0 (índice del integrante "John Lennon")

console.log(rollingStones.canciones[1].año); // 1968 (año de la canción "Sympathy for the Devil")

// Métodos para iterar Objetos

Object.keys(theBeatles).forEach(key => {
    console.log(`${key}: ${theBeatles[key]}`);
});

Object.entries(rollingStones).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// JSON
// JAVASCRIPT OBJECT NOTATION
// JSON vs XML vs text 
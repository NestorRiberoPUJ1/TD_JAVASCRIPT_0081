

/* LAS API DEL NAVEGADOR */

// Asociadas con window

console.log(window);
// Almacenar informacion en almacenamiento local

localStorage.setItem("nombre", { "Max": 28 }); // No se puede guardar objetos
localStorage.setItem("edad", "30");
localStorage.setItem("objeto", JSON.stringify({ "Max": 28 })); // Convertir a string
console.log(JSON.parse(localStorage.getItem("objeto")).Max);


// Asociadas con document
console.log(document);
console.log(document.head);


/* LAS APIS DE TERCEROS */

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

(async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})();


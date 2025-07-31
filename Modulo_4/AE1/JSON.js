/* JSON */

// un objeto JSON 

let json={
    "nombre": "Happy Gilmore",
    "edad": 30,
    "altura": 1.80,
    "deporte": "Golf",
    "habilidades": {
        "golf": 95,
        "correr": 85,
        "concentracion": 90
    },
    "logros": ["campeon de golf", "mejor jugador del año"],
    "activo": true
};

let jsonString = JSON.stringify(json); // Convertir objeto a cadena JSON
console.log(jsonString);
let jsonParse = JSON.parse(jsonString); // Convertir cadena JSON a objeto
console.log(jsonParse);
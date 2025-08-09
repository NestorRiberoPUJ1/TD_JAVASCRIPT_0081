/* ASINCRONISMO */

console.log("Inicio del programa");
let tiempoDeEjecucion = performance.now();
// Codigo bloqueante

const bloqueante = () => {
    console.log("Inicio del bloqueante");
    for (let i = 0; i < 10000; i++) {
        // Simulando un bucle largo
    }
    console.log("Fin del bloqueante");
};

const asincrono = async (id, max) => {
    let i = 0;
    let intervalo = setInterval(() => {
        i++;
        if (i === max) {
            clearInterval(intervalo);
            console.log(`Fin del proceso ${id}`, performance.now() - tiempoDeEjecucion, "milisegundos");
        }
    }, 1);
};


// PROMESAS

const promesa = () => new Promise((resolve, reject) => {
    let random = Math.random() * 10;
    setTimeout(() => {
        if (random < 5) {
            resolve(`La promesa se resolvió correctamente ${random * 1000}`);
        } else {
            reject(`La promesa se rechazó ${random * 1000}`);
        }
    }, 1000 * random);
});

promesa().then((resultado) => {
    console.log(resultado);
    console.log(promesa);
}).catch((error) => {
    console.log(error);
    console.log(promesa);
}).finally(() => {
    console.log("La promesa se terminó de ejecutar");
});

(async () => {
    try {
        let resultado = await promesa();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("La promesa se terminó de ejecutar con async/await");
    }
})();


fetch('https://docs.google.com/spreadsheets/d/1-12cUVe9ne76Pc81Gml9-YiGmIsLSM985xLfaTqSq8A/edit?gid=529006082#gid=529006082')
    .then(response => response.text())
    .then(data => {
        console.log(data);
        console.log("Fetch terminado", performance.now() - tiempoDeEjecucion, "milisegundos");
    })
    .catch(error => {
        console.log(error);
    });

console.log("Fin del programa", performance.now() - tiempoDeEjecucion, "milisegundos");
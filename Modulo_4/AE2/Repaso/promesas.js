/* PROMESAS */

// Son basicamente procesos asíncronos que pueden tener un resultado exitoso o un error.


// Se crean con el constructor Promise, que recibe una función con dos parámetros: resolve y reject.


const promesa2 = new Promise((resolve, reject) => {
    const tiempo = Math.random() * 10000; // Tiempo aleatorio entre 0 y 10 segundos
    setTimeout(() => {
        if (tiempo < 5000) {
            resolve(`Éxito: La promesa se resolvió en ${tiempo} ms`);
        } else {
            reject(`Error: La promesa falló después de ${tiempo} ms`);
        }
    }, tiempo);
});


let espera2 = 0;
let intervalo2 = setInterval(() => {
    espera2 += 100;
    console.log(`-Han pasado ${espera2 / 100} segundos.`);
}, 100);

try {
    let resultado = await promesa2;
    console.log(resultado);
} catch (error) {
    console.error(error);
} finally {
    clearInterval(intervalo2);
    console.log("Intervalo detenido.");
    console.log("Fin del proceso.");
}







const promesa = new Promise((resolve, reject) => {
    const tiempo = Math.random() * 10000; // Tiempo aleatorio entre 0 y 10 segundos
    setTimeout(() => {
        if (tiempo < 5000) {
            resolve(`Éxito: La promesa se resolvió en ${tiempo} ms`);
        } else {
            reject(`Error: La promesa falló después de ${tiempo} ms`);
        }
    }, tiempo);
});

// Para manejar el resultado de una promesa, se utilizan los métodos .then() y .catch().


let espera = 0;
let intervalo = setInterval(() => {
    espera += 100;
    console.log(`Han pasado ${espera / 100} segundos.`);
}, 100);


promesa.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log("La promesa ha finalizado, ya sea con éxito o error.");
    clearInterval(intervalo);
    console.log("Intervalo detenido.");
    console.log("Fin del proceso.");
});



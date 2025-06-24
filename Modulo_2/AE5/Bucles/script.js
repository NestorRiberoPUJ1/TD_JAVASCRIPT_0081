/* BUCLES */

// BUCLE HASTA QUE SUCEDA UNA CONDICIÓN PARTICULAR

let intentos = 0; // Inicializa el contador de intentos
let numeroAleatorio = Math.floor(Math.random() * 100000000) + 1; // Genera un número aleatorio entre 1 y 10

// Condicion de permanencia del bucle
while (numeroAleatorio !== 5) { // Bucle que se repite hasta que el número aleatorio sea 5
    console.log(`El número aleatorio es ${numeroAleatorio}, sigue intentando...`);
    intentos++; // Incrementa el contador de intentos
    numeroAleatorio = Math.floor(Math.random() * 100000000) + 1; // Genera un nuevo número aleatorio
}
console.log(`¡Felicidades! Has acertado el número: ${numeroAleatorio} después de ${intentos} intentos.`);

// BUCLE POR UNA CANTIDAD DE VECES DEFINIDA

let numeroAleatorioDefinido = 5;
console.log(`Número aleatorio definido: ${numeroAleatorioDefinido}`);

for (let i = 0; i <= 50; i++) { // Bucle que se repite 50 veces
    let nuevoNumeroAleatorio = Math.floor(Math.random() * 100) + 1; // Genera un nuevo número aleatorio entre 1 y 10
    console.log(`Intento número ${i}: El número aleatorio es ${nuevoNumeroAleatorio}`);
    if (numeroAleatorioDefinido === nuevoNumeroAleatorio) { // Si el número aleatorio es igual al número definido
        console.log(`¡Has acertado el número ${numeroAleatorioDefinido} en el intento ${i}!`);
        break; // Sale del bucle
    }
}

// valor incial ; condicion de permanencia ; incremento
for (let i = 1; i <= 1024 ; i *= 2) { // Bucle que se repite 50 veces, incrementando de 2 en 2
    console.log(`Número: ${i}`); // Imprime el número actual
}
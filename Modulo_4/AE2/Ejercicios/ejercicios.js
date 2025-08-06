// 10. Crea una función recursiva que cuente cuántos argumentos recibió usando rest y spread.

const funcionRecusriva = (...args) => {
    console.log(args);
    const [argumentoLista, ...resto] = args;
    if (!argumentoLista) {
        return 0;
    }
    return 1 + funcionRecusriva(...resto);
}

const funcionCompacta = (...args) => {
    const [argumentoLista, ...resto] = args;
    return !argumentoLista ? 0 : 1 + funcionCompacta(...resto);
}

console.log("Se recibieron: " + funcionRecusriva() + " argumentos");
console.log("Se recibieron: " + funcionRecusriva('a', 'b', 'c') + " argumentos");

console.log("Se recibieron: " + funcionCompacta() + " argumentos");
console.log("Se recibieron: " + funcionCompacta('a', 'b', 'c') + " argumentos");


const velocidad = (distancia, tiempo) => {
    if (tiempo === 0) {
        throw new Error("El tiempo no puede ser cero.");
    }
    return distancia / tiempo;
}
const aceleracion = (velocidadFinal, velocidadInicial, tiempo) => {
    if (tiempo === 0) {
        throw new Error("El tiempo no puede ser cero.");
    }
    return (velocidadFinal - velocidadInicial) / tiempo;
}

const velocidadFinal = (velocidadInicial, aceleracion, tiempo) => {
    return velocidadInicial + aceleracion * tiempo;
}


export default {
    velocidad,
    aceleracion,
    velocidadFinal
}
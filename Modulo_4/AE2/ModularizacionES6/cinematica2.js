

export const movimientoRectilineoUniforme = (distancia, tiempo) => {
    if (tiempo === 0) {
        throw new Error("El tiempo no puede ser cero.");
    }
    return distancia / tiempo;
}

export const movimientoRectilineoUniformementeAcelerado = (velocidadInicial, aceleracion, tiempo) => {
    return velocidadInicial + aceleracion * tiempo;
}

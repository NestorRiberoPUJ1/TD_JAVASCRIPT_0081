


export const convertirDecimalABinario = (numero) => {
    if (numero < 0) {
        throw new Error("El número debe ser un entero no negativo.");
    }
    return numero.toString(2);
}

export const convertirBinarioADecimal = (numeroBinario) => {
    if (!/^[01]+$/.test(numeroBinario)) {
        throw new Error("El número binario debe contener solo dígitos 0 y 1.");
    }
    return parseInt(numeroBinario, 2);
}



/* SERVIDOR */
const conversiones = require('./util/conversiones.js');

let valoresDelSensorMetrico = {
    temperatura: 32,
    distancia: 100,
    volumen: 50,
    peso: 70
};

let valoresDelSensorImperial = {
    temperatura: conversiones.celsiusToFahrenheit(valoresDelSensorMetrico.temperatura),
    distancia: conversiones.meterTofoot(valoresDelSensorMetrico.distancia),
    volumen: conversiones.literToGallon(valoresDelSensorMetrico.volumen),
    peso: conversiones.kiloToPound(valoresDelSensorMetrico.peso)
};

console.log('Valores del sensor métrico:', valoresDelSensorMetrico);
console.log('Valores del sensor imperial:', valoresDelSensorImperial);

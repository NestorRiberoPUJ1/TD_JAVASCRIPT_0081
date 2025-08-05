
// Distancia

const meterTofoot = (meters) => meters * 3.28084;
const footToMeter = (feet) => feet / 3.28084;

// Peso
const kiloToPound = (kilos) => kilos * 2.20462;
const poundToKilo = (pounds) => pounds / 2.20462;

// Temperatura
const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

// Volumen
const literToGallon = (liters) => liters * 0.264172;
const gallonToLiter = (gallons) => gallons / 0.264172;

module.exports = {
    meterTofoot,
    footToMeter,
    kiloToPound,
    poundToKilo,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    literToGallon,
    gallonToLiter
}
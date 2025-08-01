

const areaCirculo = (radio) => Math.PI * radio ** 2; // Función para calcular el área de un círculo
const perimetroCirculo = (radio) => 2 * Math.PI * radio; // Función para calcular el perímetro de un círculo
const areaCuadrado = (lado) => lado ** 2; // Función para calcular el área de un cuadrado
const perimetroCuadrado = (lado) => 4 * lado; // Función para calcular el perímetro de un cuadrado
const areaTriangulo = (base, altura) => (base * altura) / 2; // Función para calcular el área de un triángulo
const perimetroTriangulo = (lado1, lado2, lado3) => lado1 + lado2 + lado3; // Función para calcular el perímetro de un triángulo


module.exports = {
    areaCirculo,
    perimetroCirculo,
    areaCuadrado,
    perimetroCuadrado,
    areaTriangulo,
    perimetroTriangulo
}
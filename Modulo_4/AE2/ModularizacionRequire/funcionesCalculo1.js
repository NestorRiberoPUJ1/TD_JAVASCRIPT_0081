

module.exports.pendiente = (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1);
module.exports.distancia = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
module.exports.magnitud = (x, y) => Math.sqrt(x ** 2 + y ** 2);
module.exports.direccion = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.atan2(dy, dx);
};


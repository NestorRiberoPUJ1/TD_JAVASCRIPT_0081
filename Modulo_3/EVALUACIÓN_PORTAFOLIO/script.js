
let listaProductos = [];
let listaProductosComprados = [];

function agregarProducto(evento) {
    // Prevenir el comportamiento por defecto del formulario
    evento.preventDefault();
    // Obtener el valor del input
    console.log("Evento: ", evento);
    let formulario = evento.target;
    let producto = formulario.producto.value;
    console.log("Producto: ", producto);

    /* CONDICIONES DE BORDE */
    // TODO: Validar que el producto no esté vacío

    listaProductos.push(producto);

    let listaProductosAgregados = document.getElementById("lista-productos-agregados");
    listaProductosAgregados.innerHTML = ""; // Limpiar la lista antes de agregar los nuevos productos
    listaProductos.forEach((producto, index) => {
        let elemento =
            `
                <li>
                    <input type="checkbox" name="producto${index}" id="producto${index}">
                    <span>${producto}</span>
                    <button onclick="eliminarProducto(${index})">Eliminar</button>
                </li>
            `;
        listaProductosAgregados.innerHTML += elemento;
    });
    // Limpiar el input después de agregar el producto
    formulario.producto.value = "";

}
function checkearProducto() {

}
function eliminarProducto(index) {
    listaProductos.splice(index, 1);
    // Actualizar la lista de productos agregados
    let listaProductosAgregados = document.getElementById("lista-productos-agregados");
    listaProductosAgregados.innerHTML = "";
    listaProductos.forEach((producto, index) => {
        let elemento =
            `
                <li>
                    <input type="checkbox" name="producto${index}" id="producto${index}">
                    <span>${producto}</span>
                    <button onclick="eliminarProducto(${index})">Eliminar</button>
                </li>
            `;
        listaProductosAgregados.innerHTML += elemento;
    });
}
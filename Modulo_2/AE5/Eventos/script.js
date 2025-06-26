

function mostrarAlerta() {
    alert("¡Hola! Este es un mensaje de alerta.");
}

let listaEquipos = document.getElementById("listaEquipos");
listaEquipos.addEventListener("click", (event) => {
    console.log('Bienvenido a la lista de equipos');
});

let equipos = [...listaEquipos.children];

equipos.forEach((equipo) => {
    equipo.addEventListener("click", (event) => {
        alert(`Equipo seleccionado: ${equipo.textContent}`);
        event.stopPropagation(); // Evita que se dispare el evento del padre
    });
});

// Agregar un nuevo equipo

let nuevoEquipo = document.createElement("li");
nuevoEquipo.textContent = "New York Knicks";
listaEquipos.appendChild(nuevoEquipo);
nuevoEquipo.addEventListener("click", (event) => {
    alert(`Equipo seleccionado: ${nuevoEquipo.textContent}`);
    event.stopPropagation(); // Evita que se dispare el evento del padre
});


// Imprimir cambios en las entradas

let entradas = document.querySelectorAll("input");
entradas.forEach((entrada) => {
    entrada.addEventListener("change", () => {
        console.log(`Valor actual de la entrada: ${entrada.value}`);
    });
});


document.addEventListener("keydown", (event) => {
    console.log(`Tecla presionada: ${event.key}`);
});


const cursorImg = document.getElementById("cursor");
cursorImg.style.position = "absolute";
document.addEventListener("pointermove", (event) => {

    setTimeout(() => {
        cursorImg.style.left = `${event.layerX}px`;
        cursorImg.style.top = `${event.layerY}px`;
    }, 100);
    event.preventDefault(); // Evita el comportamiento por defecto del cursor
    event.stopPropagation(); // Evita que el evento se propague a otros elementos
}); 

document.addEventListener("click", (event) => {

    // Animacion el curso crece en 25% y vuelve a su tamaño original
    cursorImg.style.transform = "scale(1.5)";
    setTimeout(() => {
        cursorImg.style.transform = "scale(1)";
    }, 200);
}); 






console.log("Script loaded successfully!");

/* SELECTORES EN JS */

// QUERYSELECTOR: retorna el primer elemento que coincide con el selector CSS
let titulo = document.querySelector(".personaje");
console.log(titulo);

// QUERYSELECTORALL: retorna todos los elementos que coinciden con el selector CSS
let listas = document.querySelectorAll("ul");
console.log(listas);

// GETELEMENTSBYTAGNAME: retorna todos los elementos con el nombre de etiqueta especificado
let listItems = [...document.getElementsByTagName("li")];
console.log(listItems);

// GETELEMENTSBYCLASSNAME: retorna todos los elementos con la clase especificada
let personajes = [...document.getElementsByClassName("personaje")];
console.log(personajes);

// GETELEMENTSBYID: retorna el elemento con el ID especificado
let tituloId = document.getElementById("titulo-personajes");
console.log(tituloId);


/* MODIFICAR ATTRIBUTOS DE MIS ELEMENTOS */

// Modificar el contenido de un elemento
tituloId.textContent = "Personajes de la saga";
// Modificar el contenido HTML de un elemento
tituloId.innerHTML = "<em>Personajes de la saga</em>";
// Modificar el estilo de un elemento
tituloId.style.color = "blue";
tituloId.style.fontSize = "1.3em";

// Modificar la lista de clases de un elemento
tituloId.classList.add("personaje");

// Agregar un nuevo elemento al DOM
let nuevoElemento = document.createElement("p");
nuevoElemento.textContent = "Nuevo párrafo agregado al DOM";
document.body.appendChild(nuevoElemento);

let imagen = document.createElement("img");
imagen.src = "https://upload.wikimedia.org/wikipedia/commons/e/e5/Lightning_McQueen_Petersen_Automotive_Museum_2024.jpg";
imagen.alt = "Imagen de Lightning McQueen";
imagen.style.width = "300px";
document.body.appendChild(imagen);

// Eliminar un elemento del DOM
document.body.removeChild(nuevoElemento);


// RECORRER ELEMENTOS DE LISTAS DEL DOM
personajes.forEach((personaje) => {
    console.log(personaje);
    personaje.style.color = "red";
    personaje.style.fontSize = "1.2em";
    personaje.style.fontWeight = "bold";
    personaje.style.textDecoration = "underline";
});

listas.forEach((lista) => {
    console.log(lista);
    lista.style.backgroundColor = "lightgray";
    lista.style.padding = "10px";
    lista.style.borderRadius = "5px";
});


let newTable = document.createElement("table");
newTable.style.width = "100%";
newTable.style.borderCollapse = "collapse";
newTable.style.marginTop = "20px";
let tableData=[
    ["Nombre", "Edad", "Ciudad"],
    ["Juan", "25", "Madrid"],
    ["Ana", "30", "Barcelona"],
    ["Luis", "28", "Valencia"]
];
tableData.forEach((rowData, index) => {
    let newRow = newTable.insertRow();
    rowData.forEach((cellData) => {
        let newCell = newRow.insertCell();
        newCell.textContent = cellData;
        newCell.style.border = "1px solid black";
        newCell.style.padding = "8px";
        if (index === 0) {
            newCell.style.fontWeight = "bold";
            newCell.style.backgroundColor = "#f2f2f2";
        }else {
            newCell.style.backgroundColor = index % 2 === 0 ? "#f9f9f9" : "#ffffff";
        }
    });
});
document.body.appendChild(newTable);
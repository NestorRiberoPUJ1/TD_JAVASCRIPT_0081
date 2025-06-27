
console.log("Inicio del script");
// Selecciona el elemento con id "titulo"
let titulo = document.getElementById("title");
titulo = document.querySelector("#title");
console.log(titulo);
titulo.innerHTML = "Título modificado desde JavaScript";
// Con JQUERY
const tituloJQuery = $("#title");
console.log(tituloJQuery);
tituloJQuery.html("Título modificado desde jQuery");


// Seleccionar por clase
let attributos = document.getElementsByClassName("attribute");
attributos = document.querySelectorAll(".attribute");
console.log(attributos);
// agregar un escuchador de eventos a cada atributo
attributos.forEach((atributo) => {
    atributo.addEventListener("click", () => {
        console.log("Atributo clickeado:", atributo.innerHTML);
    });
});

// Con JQUERY
const habilitiesJQuery = $(".hability");
console.log(habilitiesJQuery);
habilitiesJQuery.on("click", function () {
    console.log("Habilidad clickeada:", $(this).html());
});

// Seleccionar por etiqueta
let h4s = document.getElementsByTagName("h4");
h4s = document.querySelectorAll("h4");
console.log(h4s);
// Con JQUERY
const h4sJQuery = $("h4");
console.log(h4sJQuery);


// agregar un elemento a la lista de roles

const roles = document.querySelector("#roles");
const newRole = document.createElement("li");
newRole.innerHTML = "Reparaciones del barco";
roles.appendChild(newRole);

// Con JQUERY
const habilities = $("#habilities");
const newHability = $("<li class='hability'>Mecánicas</li>");
habilities.append(newHability);
newHability.on("click", function () {
    console.log("Nueva habilidad clickeada:", $(this).html());
});
habilities.addClass("bg-primary");
newHability.addClass("text-white");


const imagenesCarousel = $(".carousel-item img");
const exampleModal = $("#exampleModal");
console.log(imagenesCarousel);
imagenesCarousel.on("click", function () {
    console.log("Imagen clickeada:", $(this).attr("src"));

    // mostrar el modal
    exampleModal.modal("show");
    // cambiar la imagen del modal
    const modalImage = $("#modalImage");
    modalImage.attr("src", $(this).attr("src"));
});



const buscarPerrito = async () => {
    try {
        const img = document.getElementById('dog-image');
        img.src= './assets/load.webp'
        img.classList.add('loading');
        img.classList.remove('perrito');
        const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await respuesta.json();
        console.log("resultado", data, respuesta);
        img.src = data.message;
        await fetch(data.message);
        img.classList.remove('loading');
        img.classList.add('perrito');
    } catch (error) {
        console.error(error);
    }
}

buscarPerrito();
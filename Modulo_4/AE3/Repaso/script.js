

const agregarComentario = (elemento) => {
/*     const parent = elemento.parentNode;
    const p = parent.children[0];
    const span = p.children[0];
    let numeroComentarios = parseInt(span.innerText);
    numeroComentarios++;
    span.innerText = numeroComentarios; */
    const span = elemento.parentNode.children[0].children[0];
    span.innerText = parseInt(span.innerText) + 1;
}


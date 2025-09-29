//Importaciones
const express = require('express');
const paisesFunc= require('./paises.js');  //importo el modulo de paises
//configuraciones
const app = express();

app.use(express.json()); //middleware para parsear el body de las peticiones

const port = 8080;


//procesos
app.get('/paises',(req,res)=>{
    const paises = paisesFunc.getPaises();
    res.json(paises);
})

app.post('/paises',(req,res)=>{
    const nuevoPais = req.body;
    const paises = paisesFunc.agregarPais(nuevoPais);
    res.json(paises);
})

app.delete('/paises/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const paises = paisesFunc.eliminarPais(id);
    res.json(paises);
})



//servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
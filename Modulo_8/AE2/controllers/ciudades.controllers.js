const { listarCiudades, buscarCiudadPorId, crearCiudad, actualizarCiudad, eliminarCiudad } = require('../models/ciudad');

const getCiudades = async (req, res) => {
  const data = listarCiudades();
  return res.json(data).status(200);
}

const getCiudadPorId = async (req, res) => {
  const { id } = req.params;
  const data = buscarCiudadPorId(parseInt(id));
  if (data) {
    return res.json(data).status(200);
  } else {
    return res.status(404).json({ message: "Ciudad no encontrada" });
  }
}

const postCiudad = async (req, res) => {
  const nuevaCiudad = req.body;
  const data = crearCiudad(nuevaCiudad);
  return res.status(201).json(data);
}

const putCiudad = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  const ciudadEditada = actualizarCiudad(parseInt(id), datosActualizados);
  if (ciudadEditada) {
    return res.json(ciudadEditada).status(200);
  } else {
    return res.status(404).json({ message: "Ciudad no encontrada para actualizar" });
  }
}

const deleteCiudad = async (req, res) => {
  const { id } = req.params;
  const exito = eliminarCiudad(parseInt(id));
  if (exito) {
    return res.status(204).send();
  } else {
    return res.status(404).json({ message: "Ciudad no encontrada para eliminar" });
  }
}

module.exports = {
  getCiudades,
  getCiudadPorId,
  postCiudad,
  putCiudad,
  deleteCiudad
};
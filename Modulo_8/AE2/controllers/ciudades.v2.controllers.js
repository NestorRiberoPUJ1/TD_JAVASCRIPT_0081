const { listarCiudades, buscarCiudadPorId, crearCiudad, actualizarCiudad, eliminarCiudad } = require('../models/ciudad');

const getCiudades = async (req, res) => {
  const data = listarCiudades();
  // AGREGAR LINKS HATEOAS
  const dataConLinks = data.map(ciudad => ({
    ...ciudad,
    links: {
      self: `/api/v2/ciudades/${ciudad.id}`,
      update: `/api/v2/ciudades/${ciudad.id}`,
      delete: `/api/v2/ciudades/${ciudad.id}`
    }
  }));

  return res.json(dataConLinks).status(200);
}

const getCiudadPorId = async (req, res) => {
  const { id } = req.params;
  const data = buscarCiudadPorId(parseInt(id));
  if (data) {
    // AGREGAR LINKS HATEOAS
    const dataConLinks = {
      ...data,
      links: {
        self: `/api/v2/ciudades/${data.id}`,
        update: `/api/v2/ciudades/${data.id}`,
        delete: `/api/v2/ciudades/${data.id}`
      }
    };
    return res.json(dataConLinks).status(200);
  } else {
    return res.status(404).json({ message: "Ciudad no encontrada" });
  }
}

const postCiudad = async (req, res) => {
  const nuevaCiudad = req.body;
  const data = crearCiudad(nuevaCiudad);
  // AGREGAR LINKS HATEOAS
  const dataConLinks = {
    ...data,
    links: {
      self: `/api/v2/ciudades/${data.id}`,
      update: `/api/v2/ciudades/${data.id}`,
      delete: `/api/v2/ciudades/${data.id}`,
      all: `/api/v2/ciudades`
    }
  };
  return res.status(201).json(dataConLinks);
}

const putCiudad = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  const ciudadEditada = actualizarCiudad(parseInt(id), datosActualizados);
  if (ciudadEditada) {
    // AGREGAR LINKS HATEOAS
    const ciudadConLinks = {
      ...ciudadEditada,
      links: {
        self: `/api/v2/ciudades/${ciudadEditada.id}`,
        update: `/api/v2/ciudades/${ciudadEditada.id}`,
        delete: `/api/v2/ciudades/${ciudadEditada.id}`,
        all: `/api/v2/ciudades`
      }
    };
    return res.json(ciudadConLinks).status(200);
  } else {
    return res.status(404).json({ message: "Ciudad no encontrada para actualizar" });
  }
}

const deleteCiudad = async (req, res) => {
  const { id } = req.params;
  const exito = eliminarCiudad(parseInt(id));
  if (exito) {
    // AGREGAR LINKS HATEOAS
    const links = {
      self: `/api/v2/ciudades/${id}`,
      all: `/api/v2/ciudades`
    };
    return res.status(204).json(links);
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
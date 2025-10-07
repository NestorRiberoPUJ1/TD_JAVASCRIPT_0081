const pool = require('../db/pool');


// CREAR ELEMENTO
const createPet = async (pet) => {
const { name } = pet;
const query = `INSERT INTO pets (name) VALUES ('${name}') RETURNING *`;
const result = await pool.query(query);
return result.rows[0];
}
// LISTAR ELEMENTOS
const getPets = async () => {
    const result = await pool.query('SELECT * FROM pets');
    return result.rows;
}
// BUSCAR ELEMENTO
const getPetById = async (id) => {

}
// ACTUALIZAR ELEMENTO
const updatePet = async (id, pet) => {

}

// ELIMINAR ELEMENTO
const deletePet = async (id) => {

}

module.exports = {
    createPet,
    getPets
}

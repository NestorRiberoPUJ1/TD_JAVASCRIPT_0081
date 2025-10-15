const pool = require('../db/pool');

/* CRUD COMPLETO PARA MASCOTAS */


// CREAR ELEMENTO
const createPet = async (pet)=>{
    try {
        const query = `INSERT INTO pets (name, specie, birthdate)
                        VALUES($1, $2, $3) RETURNING *;`
        const result = await pool.query(query, [pet.name, pet.specie, pet.birthdate]);
        return result.rows[0];
    } catch (error) {
        console.error('Error creating pet:', error);
        throw error;
    }
}
  
// LECTURA : LISTAR ELEMENTOS
const getPets = async ()=>{
    try {
        const query = `SELECT * FROM pets;`
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error getting pets:', error);
        throw error;
    }
}

// LECTURA : BUSCAR ELEMENTO
const getPetById = async (id)=>{
    try {
        const query = `SELECT * FROM pets WHERE id = $1;`
        const result = await pool.query(query, [id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error getting pet by ID:', error);
        throw error;
    }
}

// ACTUALIZAR ELEMENTO
const updatePet = async (id, pet)=>{
    try {
        const query = `UPDATE pets SET name = $1, specie = $2, birthdate = $3 WHERE id = $4 RETURNING *;`
        const result = await pool.query(query, [pet.name, pet.specie, pet.birthdate, id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error updating pet:', error);
        throw error;
    }
}

// BORRAR ELEMENTO
const deletePet = async (id)=>{
    try {
        const query = `DELETE FROM pets WHERE id = $1 RETURNING *;`
        const result = await pool.query(query, [id]);
        return result;
    } catch (error) {
        console.error('Error deleting pet:', error);
        throw error;
    }
}

module.exports = {
    createPet,
    getPets,
    getPetById,
    updatePet,
    deletePet
}



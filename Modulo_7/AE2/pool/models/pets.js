const pool = require('../db/pool');


// CREAR ELEMENTO
const createPet = async (pet) => {
    const { name } = pet;

    try {
        // VALIDACIONES

        // Validar que el nombre no esté vacío y sea una cadena de texto
        if (!name || typeof name !== 'string') {
            throw new Error('Invalid pet name');    // Lanzar un error si la validación falla
        }

        const query = 'INSERT INTO pets (name) VALUES ($1) RETURNING *;';
        const result = await pool.query(query, [name]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}
// LISTAR ELEMENTOS
const getPets = async (filtro) => {
    try {
        if (filtro.specie) {
            const query = 'SELECT * FROM pets WHERE specie = $1;';
            const result = await pool.query(query, [filtro.specie]);
            return result;
        }

        // SI NO HAY FILTRO USAR CURSOR PARA IR DE 2 EN 2

        // Start a transaction
        await pool.query('BEGIN'); // Iniciar una transacción
        const cursorQuery = 'DECLARE pet_cursor CURSOR FOR SELECT * FROM pets;'; // Declarar un cursor
        await pool.query(cursorQuery);

        let allRows = [];
        let fields=[]
        let result;
        do {
            result = await pool.query('FETCH 2 FROM pet_cursor;'); // Obtener 2 filas a la vez
            allRows = allRows.concat(result.rows);
            fields = result.fields;
        } while (result.rows.length > 0);

        await pool.query('CLOSE pet_cursor;'); // Cerrar el cursor
        await pool.query('COMMIT'); // Confirmar la transacción
        return { rows: allRows, fields: fields, rowCount: allRows.length };
    } catch (error) {
        throw error;
    }
}
// BUSCAR ELEMENTO
const getPetById = async (id) => {
    try {
        const query = 'SELECT * FROM pets WHERE id = $1;';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}
// ACTUALIZAR ELEMENTO
const updatePet = async (id, pet) => {

}

// ELIMINAR ELEMENTO
const deletePet = async (id) => {

}

module.exports = {
    createPet,
    getPets,
    getPetById,
}

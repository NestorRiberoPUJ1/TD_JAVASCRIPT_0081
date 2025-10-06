// importamos el cliente de la base de datos
import client from './db/client.js';

const prueba = async () => {
    try {
        // Conectamos el cliente
        await client.connect();
        console.log('Conexión exitosa a la base de datos');

        // Consultas de ejemplo
        const res = await client.query('Select * from pets');
        console.log('Datos de pets:', res.rows);

        const insertRes = await client.query("INSERT INTO pets (name) VALUES ('Firulais') ");

        const res2 = await client.query('Select * from pets');
        console.log('Datos de pets:', res2.rows);

    } catch (error) {
        console.error('Error de conexión', error);
    }
    finally {
        // Cerramos la conexión
        await client.end();
        console.log('Conexión cerrada');
    }
}

// Ejecutamos la función de prueba
prueba();



const pool = require('../db/pool');

class Cuentas {

    constructor(id, nombre, saldo) {
        this.id = id;
        this.nombre = nombre;
        this.saldo = saldo;
    }

    async crearCuenta() {
        const query = `INSERT INTO cuentas (nombre, saldo) VALUES ($1, $2) RETURNING *`;
        const values = [this.nombre, this.saldo];
        const result = await pool.query(query, values);
        console.table(result.rows[0]);
        this.id = result.rows[0].id;
        return result.rows[0];
    }

    async actualizarCuenta() {
        const query = `UPDATE cuentas SET nombre = $1, saldo = $2 WHERE id = $3 RETURNING *`;
        const values = [this.nombre, this.saldo, this.id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    async eliminarCuenta() {
        const query = `DELETE FROM cuentas WHERE id = $1 RETURNING *`;
        const values = [this.id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async obtenerCuentaPorId(id) {
        const query = `SELECT * FROM cuentas WHERE id = $1`;
        const values = [id];
        const result = await pool.query(query, values);
        if (result.rows.length === 0) {
            return null;
        }
        const { nombre, saldo } = result.rows[0];
        return new Cuentas(id, nombre, saldo);
    }


    static async tranferirFondos(cuentaOrigen, cuentaDestino, monto) {
        const client = await pool.connect();
        // BUSCAR QUE LAS CUENTAS EXISTAN
        try {
            const origen = await Cuentas.obtenerCuentaPorId(cuentaOrigen.id);
            const destino = await Cuentas.obtenerCuentaPorId(cuentaDestino.id);

            // VALIDAR QUE EXISTAN
            if (!origen || !destino) {
                throw new Error('Una o ambas cuentas no existen');
            }
            // VALIDAR QUE LA CUENTA ORIGEN TENGA FONDOS SUFICIENTES
            if (origen.saldo < monto) {
                throw new Error('Fondos insuficientes en la cuenta de origen');
            }

            

            // EMPEZAMOS LA TRANSACCION

            // INICIA LA TRANSACCION
            let result;
            await client.query('BEGIN');
            // HACEMOS EL DESCUENTO DE LA CUENTA ORIGEN
            result = await client.query(
                'UPDATE cuentas SET saldo = saldo - $1 WHERE id = $2',
                [monto, origen.id]
            );
            if (result.rowCount === 0) {
                throw new Error('Error al actualizar la cuenta origen');
            }
            // HACEMOS EL ABONO A LA CUENTA DESTINO
            result = await client.query(
                'UPDATE cuentas SET saldo = saldo + $1 WHERE id = $2',
                [monto, destino.id]
            );
            if (result.rowCount === 0) {
                throw new Error('Error al actualizar la cuenta destino');
            }
            // CONFIRMAMOS LA TRANSACCION
            console.log('Transferencia exitosa');
            await client.query('COMMIT');

        }
        catch (error) {
            // ALGO SALIO MAL, HACEMOS ROLLBACK
            await client.query('ROLLBACK');
            console.error('Error en la transferencia:', error.message);
        }
        finally {
            // LIBERAMOS EL CLIENTE
            client.release();
        }
    }

}

module.exports = Cuentas;
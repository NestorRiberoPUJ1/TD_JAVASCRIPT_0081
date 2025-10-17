
const fs = require('fs/promises');

const Cuentas = require('./models/cuentas');

const main = async () => {
  /* let nestorAhorros = new Cuentas(null, 'Nestor Ahorros', 5000);
  await nestorAhorros.crearCuenta();
  let jeanAhorros = new Cuentas(null, 'Jean Ahorros', 8000);
  await jeanAhorros.crearCuenta(); */
  let nestorAhorros = await Cuentas.obtenerCuentaPorId(10);
  let jeanAhorros = await Cuentas.obtenerCuentaPorId(11);

  Cuentas.tranferirFondos(nestorAhorros, jeanAhorros, 5000);
  Cuentas.tranferirFondos(nestorAhorros, jeanAhorros, 18000);
  Cuentas.tranferirFondos(jeanAhorros, nestorAhorros, 18000);


};

main();

process.on('uncaughtException',async (err) => {
  console.error('Error no controlado:', err);
  // UNA BUENA PRACTICA ES GUARDAR LOS LOGS EN UN ARCHIVO
  const logs = JSON.parse(await fs.readFile('./logs.json', 'utf-8'));
  logs.push({ error: err.message, timestamp: new Date() });
  await fs.writeFile('./logs.json', JSON.stringify(logs, null, 2));
});
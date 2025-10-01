const yargs = require('yargs');
const chalk = require('chalk');
const fs = require('fs');

//CONFIGURACION DE PARAMETROS YARGS
const argv = yargs
    .option('environment', {
        alias: 'env',
        description: 'Entorno de ejecucion',
        type: 'string',
        choices: ['dev', 'test', 'prod'],
        default: 'dev',
    })
    .argv;

console.log(chalk.blue(argv.environment));

const rutaArchivos = argv.environment === 'dev' ? '/dev' : '/test';

try {
    const data = fs.readFileSync(__dirname + rutaArchivos + '/cantantes.json', 'utf-8');
    const cantantes = JSON.parse(data);

    console.log(chalk.green('Listado de Cantantes:'));
    console.log(cantantes);
} catch (error) {
    console.log(chalk.red('Error al leer el archivo de cantantes:', error.message));
}



/* setTimeout(() => {
    console.log(chalk.yellow('Proceso Terminado'));
}, 2000); */

/* setInterval(() => {
    console.log(chalk.red('Proceso en Ejecucion...'));
}, 1000); */

console.log(__dirname, __filename);
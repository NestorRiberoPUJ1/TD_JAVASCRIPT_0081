const { exec, spawn } = require("child_process");

console.log("Ejecutando comando...");


exec("ls -lh", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

console.log("Comando ejecutado");
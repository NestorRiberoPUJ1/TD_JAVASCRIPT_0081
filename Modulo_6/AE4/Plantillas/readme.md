
# Paso 1: Crear archivo principal

Crea un archivo llamado `server.js` en la raíz de tu proyecto. Este archivo será el punto de entrada de tu aplicación.

```bash
touch server.js
```

En este archivo, podrás configurar tu servidor y la lógica principal de tu aplicación.


# Paso 2: Iniciar el proyecto con npm

Inicializa tu proyecto de Node.js ejecutando el siguiente comando en la terminal:

```bash
npm init -y
```

Este comando creará un archivo `package.json` con la configuración predeterminada, necesario para gestionar las dependencias de tu proyecto.



# Paso 3: Instalar dependencias iniciales

Instala las dependencias necesarias para tu proyecto. Utiliza el siguiente comando para instalar `express` (framework para servidores), `hbs` (motor de plantillas Handlebars) y `nodemon` (herramienta para desarrollo que reinicia el servidor automáticamente):

```bash
npm install express hbs
npm install --save-dev nodemon
```

- `express`: Permite crear y gestionar el servidor web.
- `hbs`: Permite usar plantillas Handlebars en tu aplicación.
- `nodemon`: Facilita el desarrollo reiniciando el servidor al detectar cambios en los archivos.



# Paso 4: Configurar script de desarrollo

Agrega el siguiente script en la sección `"scripts"` de tu archivo `package.json` para facilitar el inicio del servidor en modo desarrollo con `nodemon`:

```json
"scripts": {
    "dev": "nodemon server.js"
}
```

Ahora puedes iniciar tu servidor en modo desarrollo ejecutando:

```bash
npm run dev
```


# Paso 5: Usar módulos ES6

Si deseas utilizar la sintaxis de módulos ES6 (`import`/`export`) en lugar de `require`/`module.exports`, debes agregar el siguiente campo en tu archivo `package.json`:

```json
"type": "module"
```

Esto permitirá que Node.js reconozca y ejecute archivos con la sintaxis de módulos ES6.
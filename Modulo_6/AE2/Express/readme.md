## Comandos para revisar el estado de Node.js y npm

```bash
# Ver versión de Node.js
node -v

# Ver versión de npm
npm -v
```

## Crear un proyecto Node.js

```bash
# Se recomienda crear primero el archivo principal del proyecto
touch server.js
# Inicializar un proyecto Node.js con configuración predeterminada
npm init -y

```

## Crear un archivo `.gitignore`

Se recomienda crear un archivo `.gitignore` para excluir archivos y carpetas que no deben subirse al repositorio, como `node_modules` y `package-lock.json`:

```bash
touch .gitignore
```

Contenido sugerido para `.gitignore`:

```
node_modules/
package-lock.json
```
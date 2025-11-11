//IMPORTACIONES
const express = require('express');
const jwt = require('jsonwebtoken');
const { expressjwt } = require('express-jwt');
const bcrypt = require('bcryptjs');

const users = [
    {
        username: 'user',
        password: '$2b$10$TZwta4O2M5GObB0FPtnNaeNPGFX/J943rFu4EmRGYpAbrVDtEEj/W',
        role: 'admin'
    },

];

//CONFIGURACIONES
const app = express(); // Crear la aplicación de Express
const PORT = 3000;
const SECRET_KEY = 'tu_clave_secreta_aqui';

app.use(express.json()); // Middleware para parsear JSON

//PROTECCION DE RUTAS
app.use(
    expressjwt({ secret: SECRET_KEY, algorithms: ['HS256'] }).unless({ path: ['/register', '/login'] })
);

const isAdmin = (req, res, next) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log(decoded);
    const user = users.find(u => u.username === decoded.username);
    req.user = user;
    if (req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Acceso denegado: se requieren privilegios de administrador' });
    }
}


//RUTAS

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    console.log({ username, password: hashedPassword });
    res.json({ message: 'Usuario registrado exitosamente' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Simulación de autenticación 
    const user = users.find(u => u.username === username); // Buscar usuario en el "almacén"
    if (user) {
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (passwordIsValid) {
            // Generar token JWT
            const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
            return res.json({ message: 'Autenticación exitosa', token });
        }
    }

    res.status(401).json({ message: 'Credenciales inválidas' });
});

app.get('/protected', (req, res) => {
    res.json({ message: 'Acceso concedido a la ruta protegida', user: req.user });
});

app.get('/admin', isAdmin, (req, res) => {
    res.json({ message: 'Acceso concedido a la ruta de administrador', user: req.user });
});

// Manejo de errores de token
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ mensaje: 'Token inválido o expirado' });
    } else {
        next(err);
    }
});

//SERVIDOR

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE3NjI4MTQ5MTUsImV4cCI6MTc2MjgxODUxNX0.qagPp8ANzA_aqXsZFK5WXO4E_zGXSShmOhnvzDmAY5w"
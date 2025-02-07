const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Inicializar la aplicación Express
const app = express();

// Middleware para seguridad
app.use(helmet());

// Middleware para parsear JSON
app.use(express.json());

// Middleware para CORS
app.use(cors());

// Middleware para logging
app.use(morgan('dev'));

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API funcionando');
});

// Middleware para manejo de errores
app.use(notFound);
app.use(errorHandler);

// Definir el puerto y arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
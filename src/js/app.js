// filepath: /C:/Users/Usuario/OneDrive/Documentos/GitHub/E-Commerce-Fullstack/src/js/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const authRoutes = require('../routes/authRoutes');
const productRoutes = require('../routes/productRoutes');
const errorMiddleware = require('../middleware/errorMiddleware');

dotenv.config(); // Cargar variables de entorno

const app = express();

// Conectar a la base de datos
(async () => {
  try {
    await connectDB();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Detener la aplicación si falla la conexión a la base de datos
  }
})();

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.status(200).send('¡Bienvenido a la API de ecommerce!');
});

// Middleware de manejo de errores
app.use(errorMiddleware);

// Validar variables de entorno necesarias
if (!process.env.PORT) {
  console.error('PORT is not defined in the environment variables');
  process.exit(1);
}

// Iniciar servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
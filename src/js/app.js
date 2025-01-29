const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config(); // Cargar variables de entorno

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de ecommerce!');
});

// Middleware de manejo de errores
app.use(errorMiddleware);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
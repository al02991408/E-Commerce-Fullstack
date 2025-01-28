const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de ecommerce!');
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
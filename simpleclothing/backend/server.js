import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';

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

// Rutas de productos
app.use('/api/products', productRoutes);

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/', (_, res) => {
    res.send('API funcionando');
});

// Middleware para manejo de errores
app.use(notFound);
app.use(errorHandler);

// Definir el puerto y arrancar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
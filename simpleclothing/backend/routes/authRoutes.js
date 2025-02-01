const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Registrar usuario
router.post('/register', register);

// Iniciar sesión de usuario
router.post('/login', login);

module.exports = router;
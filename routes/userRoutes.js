// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/usuarios', userController.listarUsuarios);
router.post('/usuarios', userController.criarUsuario);
router.get('/usuarios/:id', userController.buscarUsuarioPorId);
router.put('/usuarios/:id', userController.atualizarUsuario);
router.delete('/usuarios/:id', userController.removerUsuario);

module.exports = router;
// server.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express ();
const PORT = 3000;

// Middleware para parsear o corpo das requisições com JSON
app.use(express.json());

// Rotas 
app.use('/api', userRoutes);

// Iniciar o servidor 
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
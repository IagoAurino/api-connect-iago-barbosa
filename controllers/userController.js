// controllers/userController.js
const users = require('../models/userModel');

const listarUsuarios = (req, res) => {
    res.status(200).json(users);
};

const criarUsuario = (req, res) => {
    const { nome, email, cargo } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Validação falhou: Os campos 'nome' e 'email' são obrigatórios."
        });
    }
    
    // 2. Lógica de inserção e geração de ID único
    const novoUsuario = { nome, email, cargo };
    novoUsuario.id = users.length > 0 ? users[users.length - 1].id + 1 : 1; 
    users.push(novoUsuario);
    
    res.status(201).json({
        sucesso: true,
        mensagem: "Usuário cadastrado com integridade e sucesso!",
        dados: novoUsuario
    });
};


const buscarUsuarioPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ messagem: 'Usuário não encontrado' });
    }
    res.status(200).json(users[index]);
};

const atualizarUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id); // É esta linha que estava faltando ou com erro!

    if (index === -1) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado para atualização' });
    }

    users[index] = { ...users[index], ...req.body, id: id };
    res.status(200).json(users[index]);
};

const removerUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ messagem: 'Usuário não encontrado para remoção' }); 
    }

    users.splice(index, 1);
    res.status(200).json({ messagem: 'Usuário removido com sucesso' });
};

module.exports = {
    listarUsuarios,
    criarUsuario,
    buscarUsuarioPorId,
    atualizarUsuario,
    removerUsuario
};
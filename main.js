const express = require('express');
const path = require('path');
const app = express();
const port = 6065;

// Define uma rota para a página inicial
app.get('/', (req, res) => {
    res.json({ 'Status': 'OK' });
});

// Define a pasta onde os arquivos estáticos estão localizados
const pastaEstática = path.join(__dirname, 'public');

// Define a rota para servir arquivos estáticos a partir da pasta definida
app.use(express.static(pastaEstática));

// Define uma rota para a página index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(pastaEstática, 'index.html'));
});

//Rota para o cadastro
app.get('/index/cadastro', (req,res) => {
    res.sendFile(path.join(pastaEstática, 'cadastro.html'))
})

//Rota para login
app.get('/index/cadastro/login', (req,res) => res.sendFile(path.join(pastaEstática, 'login.html')))

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
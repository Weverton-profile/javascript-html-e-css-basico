const expresss = require('express');
const app = expresss();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    res.send('Recebi o formulario');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});
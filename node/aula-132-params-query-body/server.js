const expresss = require('express');
const app = expresss();

app.use(expresss.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="nome">
            <button>Olá novo cliente</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUsuarios);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Recebi o formulario');
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});
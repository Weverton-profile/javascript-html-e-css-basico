const expresss = require('express');
const app = expresss();
const routes = require('./routes');

app.use(expresss.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});
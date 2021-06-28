const expresss = require('express');
const app = expresss();
const routes = require('./routes');
const path = require('path');

app.use(expresss.urlencoded({ extended: true }));

app.use(expresss.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});
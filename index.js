const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//conectar mongodb 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true
});

//crear el servidor
const app = express();

//habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas de la app
app.use('/', routes());

//puerto

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

app.listen(port, host, () => {
    console.log('el servidor esta funcionando')
});
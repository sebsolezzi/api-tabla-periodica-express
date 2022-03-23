const express = require('express');
const funciones = require('./funciones');
const rutas = require('./routes/rutas');

const puerto = process.env.PORT || 8080;

//creando nuestra aplicacion express
app = express();
//setean el motor de plantilla que vamos a usar
app.set("view engine","ejs");

//indicando ruta para usar archivos estaticos
app.use(express.static(__dirname + '/public'));

//importanto las rutas
app.use('/',rutas);

app.listen(puerto)

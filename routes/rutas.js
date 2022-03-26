const express = require('express');
const router = express.Router();
const funciones = require('../funciones');

//renderiza la pagina principal
router.get('/',funciones.renderIndex);

//regresa todos los elementos de la tabla perdiódica
router.get('/api/todos',funciones.returnElementos);

//regresa elementos de una serie espesifica
router.get('/api/serie/:nombreserie',funciones.returnPorSerie);

//regresa un solo elemento que cumpla con el número de electrones
router.get('/api/electrones/:numeroelectrones',funciones.returnNumeroElectrones);

//regresa un solo elemento que cumpla con el simbolo enviado
router.get('/api/simbolo/:simbolo',funciones.returnPorSimbolo);

//regresa no disponible para cualquier otra ruta q ingrese el usuario
router.get('*',(req,res)=>{
    res.status(404).send('no disponible');
})


module.exports = router;
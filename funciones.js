const datos = require('./data/elementos');

function renderIndex(req,res){
    res.render('index');
}

//regresa json con todos los elentos almacenados
function returnElementos(req,res){
    res.json(datos.elementos).status(200);
}

//regresa un solo elementos que tenga ese número atómico
function returnNumeroElectrones(req,res){
    let arreglo = [];
    let {numeroelectrones} = req.params;

    for (let item of datos.elementos) {
        if(item.electrones == numeroelectrones){
            arreglo.push(item)
        }
    }
    if(arreglo != ""){
        res.status(200).json(arreglo);
    }
    else{
        res.status(204).json(arreglo);
    }
    

}
//regresa un solo elementos que tenga ese número atómico
function returnPorSimbolo(req,res){
    let arreglo = [];
    let {simbolo} = req.params;

    for (let item of datos.elementos) {
        if(item.simbolo == simbolo){
            arreglo.push(item)
        }
    }
    if(arreglo != ""){
        res.status(200).json(arreglo);
    }
    else{
        res.status(204).json(arreglo);
    }
}

//regresa json con los elementos de la serie que se le espesifique
function returnPorSerie(req,res){
    let arreglo = [];
    let {nombreserie} = req.params;
    let serie;

    switch (nombreserie) {
        case 'nometales':
            serie = 'no metales'
            break;
        case 'gasesnobles':
            serie = 'gases nobles'
            break;
        case 'halogenos':
            serie = 'halogenos'
            break;
        case 'lantanidos':
            serie = 'lantanidos'
            break;
        case 'actinidos':
            serie = 'actinidos'
            break;
        case 'metalesbloquep':
            serie = 'metales del bloque p'
            break;
        case 'metaloides':
            serie = 'metaloides'
            break;
        case 'metalesalcalinos':
            serie = 'metales alcalinos'
            break;
        case 'metalesdetransicion':
            serie = 'metales de transicion'
            break;
        case 'metalesalcalinoterreos':
            serie = 'metales alcalinoterreos'
            break;
        default:
            break;
    }
   
    for (let item of datos.elementos) {
        if(item.serie == serie){
            arreglo.push(item)
        }
    }
    res.json(arreglo);
    
}

module.exports.renderIndex = renderIndex;
module.exports.returnElementos = returnElementos;
module.exports.returnNumeroElectrones = returnNumeroElectrones;
module.exports.returnPorSimbolo = returnPorSimbolo;
module.exports.returnPorSerie = returnPorSerie;
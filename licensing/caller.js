// desde main
//console.log('start main');
//validate(2, function(callback) {
//    console.log(callback);
//});
//console.log('end main');

const called = require('./called');

called.suma(2,5,function(resultado){
    console.log(resultado);
 })


// function suma(numero_uno,numero_dos,callback){
//    setTimeout(function(){
//       var resultado = numero_uno + numero_dos;
//       callback(resultado);
//    }, 500);
// }
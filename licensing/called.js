//function validate(num, callback) {
//    console.log('start function');
//    setTimeout(function () {
//        callback(`number: ${num}`);
//    }, 2000);
//    console.log('end function');
//}

function suma(numero_uno,numero_dos,callback){
    setTimeout(function(){
       var resultado = numero_uno + numero_dos;
       callback(resultado);
    }, 500);
 }
var serial = require('node-serial-key');

var out1 = serial.getSerial(function(err, output) {
    //// GET SERIAL NUMBER ON DEVICE ////
    console.log('Output: ' + output);
    var out2 = output;
})

console.log(out1);

// Generar un serial para proteger la app
// var genSerial = serial.generateSerial('WD-WMC2E9342069', 'yoursecrethere');
var genSerial = serial.generateSerial(out2, 'yoursecrethere');
console.log('Output 2: ' + out2);
console.log('Serial: ' + genSerial);


// var yourGenerateKey = genSerial;


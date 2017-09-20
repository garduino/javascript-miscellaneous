var serial = require('node-serial-key');

var output = serial.getSerial(function(err, output) {
    //// GET SERIAL NUMBER ON DEVICE ////
    console.log(output);	
})

// Generar un serial para proteger la app
var genSerial = serial.generateSerial(output, 'yoursecrethere');
console.log(genSerial);
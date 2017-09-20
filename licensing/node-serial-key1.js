var serial = require('node-serial-key');

var deviceserial = serial.getSerial(function(err, output) {
    //// GET SERIAL NUMBER ON DEVICE ////
    console.log('Output: ' + output);
    console.log('Device Serial: ' + deviceserial);	
})

// Generar un serial para proteger la app
var genSerial = serial.generateSerial(deviceserial, 'yoursecrethere');
console.log('Serial: ' + genSerial);
var serial = require('node-serial-key');

serial.getSerial(function(err, output) {
    //// GET SERIAL NUMBER ON DEVICE ////
    console.log('Output: ' + output);

    // Generar un serial para proteger la app
    serial = serial.generateSerial(output, 'gsa@arsol.net');
    console.log('Serial: ' + serial);

})


// var yourGenerateKey = genSerial;


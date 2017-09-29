var serial = require('node-serial-key');

serial.getSerial(function(err, output) {
    //// GET SERIAL NUMBER ON DEVICE ////
    console.log('Output: ' + output);

    // Generar un serial para proteger la app
    serialNumber = serial.generateSerial(output, 'gsa@arsol.net');
    console.log('Serial: ' + serialNumber);


    var validSerial = serial.isValid(serialNumber, 'info@arsol.net');
    if (validSerial == true) {
        //// DO SOMETHING IF SERIAL NUMBER IS TRUE /////
        console.log('El número de serie es válido');
    }
    else {
        //// DO SOMETHING IF SERIAL NUMBER IS FALSE /////
        console.log('El número de serie no es válido');
    }


})



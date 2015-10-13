
// Example of calling a .js from another in nodejs
var Aes.Ctr = require('./aes');

var cryptedText = Aes.Ctr.encrypt('Texto a encriptar','contraseña', 256);

var decryptedText = Aes.Ctr.decrypt(cryptedText,'contraseña', 256);


//console.log( 'A ver ahora ' + tea.encrypt('pepe', 'pepe'));

console.log('El texto encriptado es: ' + cryptedText);

console.log('El texto desencriptado es: ' + decryptedText);

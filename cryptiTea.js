
// Example of calling a .js from another in nodejs
var tea = require('./tea');

var cryptedText = tea.encrypt('Texto a encriptar','contraseña');

var decryptedText = tea.decrypt(cryptedText,'contraseña');


//console.log( 'A ver ahora ' + tea.encrypt('pepe', 'pepe'));

console.log('El texto encriptado es: ' + cryptedText);

console.log('El texto desencriptado es: ' + decryptedText);

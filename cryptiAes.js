
// Example of calling a .js from another in nodejs
var Aes = require('./aes');

// Inside Aes, encrypt and decrypt are called as Aes.Ctr (Counter Mode) check it!!
var cryptedText = Aes.encrypt('Texto a encriptar','contraseña', 256);

var decryptedText = Aes.decrypt(cryptedText,'contraseña', 256);


//console.log( 'A ver ahora ' + tea.encrypt('pepe', 'pepe'));

console.log('El texto encriptado es: ' + cryptedText);

console.log('El texto desencriptado es: ' + decryptedText);

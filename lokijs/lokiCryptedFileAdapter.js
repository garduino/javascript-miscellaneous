
// Tomado de https://gist.github.com/seriousme/122684ca0396dbd6262f

// inspired by https://github.com/mmoulton/krypt/blob/develop/lib/krypt.js

var fs = require('fs');
var crypto = require('crypto');

var CIPHER = 'aes-256-cbc',
    KEY_DERIVATION = 'pbkdf2',
    KEY_LENGTH = 256,
    ITERATIONS = 64000,
    DIGEST = 'sha512';
	
function encrypt(input,secret){
  if (!secret) {
    throw new Error('A \'secret\' is required to encrypt');
  }

 
  var salt = crypto.randomBytes( KEY_LENGTH / 8),
      iv = crypto.randomBytes(16);

  try {

    var key = crypto.pbkdf2Sync(secret, salt, ITERATIONS, KEY_LENGTH / 8, DIGEST),
        cipher = crypto.createCipheriv(CIPHER, key, iv);

    var encryptedValue = cipher.update(input, 'utf8', 'base64');
    encryptedValue += cipher.final('base64');

    var result = {
      cipher: CIPHER,
      keyDerivation: KEY_DERIVATION,
      keyLength: KEY_LENGTH,
      iterations: ITERATIONS,
      digest: DIGEST,
      iv: iv.toString('base64'),
      salt: salt.toString('base64'),
      value: encryptedValue
    };
    return result;

  } catch (err) {
    throw new Error('Unable to encrypt value due to: ' + err);
  }
}


function decrypt(input, secret) {
  // Ensure we have something to decrypt
  if (!input) {
    throw new Error('You must provide a value to decrypt');
  }
  // Ensure we have the secret used to encrypt this value
  if (!secret) {
    throw new Error('A \'secret\' is required to decrypt');
  }

  // If we get a string as input, turn it into an object
  if (typeof input !== 'object') {
    try {
      input = JSON.parse(input);
    } catch (err) {
      throw new Error('Unable to parse string input as JSON');
    }
  }

  // Ensure our input is a valid object with 'iv', 'salt', and 'value'
  if (!input.iv || !input.salt || !input.value) {
    throw new Error('Input must be a valid object with \'iv\', \'salt\', and \'value\' properties');
  }

  var salt = new Buffer(input.salt, 'base64'),
      iv = new Buffer(input.iv, 'base64'),
      keyLength = input.keyLength;
	  iterations = input.iterations;

  try {

    var key = crypto.pbkdf2Sync(secret, salt, iterations, keyLength / 8, DIGEST),
        decipher = crypto.createDecipheriv(CIPHER, key, iv);

    var decryptedValue = decipher.update(input.value, 'base64', 'utf8');
    decryptedValue += decipher.final('utf8');

    console.log(decryptedValue);
    // Acá devuelve la DB entera desencriptada!

    return decryptedValue;

  } catch (err) {
    throw new Error('Unable to decrypt value due to: ' + err);
  }
};

function lokiCryptedFileAdapter(){};

lokiCryptedFileAdapter.prototype.setSecret = function setSecret(secret) {
  this.secret = secret;
};

lokiCryptedFileAdapter.prototype.loadDatabase = function loadDatabase (dbname, callback) {
	var decrypted;
	var secret= this.secret;
	fs.exists(dbname , function (exists){
		if (exists){
			var decryptInput = fs.readFileSync(dbname, 'utf8');
			decrypted = decrypt(decryptInput, secret);
		}
		if (typeof(callback) === 'function') {
			callback(decrypted);
		} else {
			console.log(decrypted);
		}
	});
}

lokiCryptedFileAdapter.prototype.saveDatabase = function saveDatabase(dbname, dbstring, callback) {
	var encrypted = encrypt(dbstring,this.secret);
	fs.writeFileSync(dbname,
		JSON.stringify(encrypted, null, '  '),
		'utf8');
	if (typeof(callback) === 'function') {
		callback();
	}
}

module.exports = new lokiCryptedFileAdapter;
exports.lokiCryptedFileAdapter = lokiCryptedFileAdapter;
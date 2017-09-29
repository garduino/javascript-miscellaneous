const crypto = require('crypto');
const hmac = crypto.createHmac('sha1', 'pplitepw');

// String to use for hash generation
// mail + version
stringToHash = 'garduino@gmail.com'+'0.3.1';

hmac.update(stringToHash);
console.log(hmac.digest('hex'));

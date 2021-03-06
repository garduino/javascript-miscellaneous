var cryptoJSON = require('crypto-json')
// var cipher = 'camellia-128-cbc'
var cipher = 'aes-256-cbc'
var passKey = 'weoiusdv98235iujsdkfuweuelwekjgwe8iyu23iu4jhw'
var encoding = 'hex'
 
var license = {
  company_name: 'Proyección ART',
  company_mail: 'sperez@proyeccionart.com.ar',
  due_date: '31/12/2017',
}
 
var encrypted = cryptoJSON.encrypt(license, passKey, {
  algorithm: cipher,
  encoding: encoding,
  // En keys van las que NO se encriptan
  // keys: ['machines']
})
 
console.dir(encrypted) // => 

var due_date = '12/31/2017';
var inst_date = '08/01/2017';
console.log(due_date - inst_date);
console.log(inst_date < due_date);
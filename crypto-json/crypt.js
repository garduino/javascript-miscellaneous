var cryptoJSON = require('crypto-json')
// var cipher = 'camellia-128-cbc'
var cipher = 'aes-256-cbc'
var passKey = 'weoiusdv98235iujsdkfuweuelwekjgwe8iyu23iu4jhw'
var encoding = 'hex'
 
var license = {
  company_name: 'Proyección ART',
  company_mail: 'sperez@proyeccionart.com.ar',
  licenses: 10,
  due_date: '31/12/2017',
  machines: [
    {uuid: '', registration_date: ''},
    {uuid: '', registration_date: ''},
    {uuid: '', registration_date: ''},
    {uuid: '', registration_date: ''},
    {uuid: '', registration_date: ''},
    {uuid: '', registration_date: ''},
    {uuid: '', registration_date: ''},
    {uuid: '', registration_date: ''},
    {uuid: '', registration_date: ''},
    {uuid: '', registration_date: ''}
  ]
}
 
var encrypted = cryptoJSON.encrypt(license, passKey, {
  algorithm: cipher,
  encoding: encoding,
  // En keys van las que NO se encriptan
  keys: ['machines']
})
 
console.dir(encrypted) // => 
 
/*
  { first_name: 'ac64e6168ebbb8c575a567fa4bdd467c',
    last_name: 'Davis',
    instrument: 'Trumpet',
    birth_year: '735f22844209a3dea04f2c070ead7c5b',
    albums:
     [ { title: 'Birth of the Cool', year: 1957 },
       { title: 'Bitches Brew', year: 1970 } ] }
*/

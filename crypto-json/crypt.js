var cryptoJSON = require('crypto-json')
// var cipher = 'camellia-128-cbc'
var cipher = 'aes-256-cbc'
var passKey = '394rwe78fudhwqpwriufdhr8ehyqr9pe8fud'
var encoding = 'hex'
 
var object = {
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
 
var encrypted = cryptoJSON.encrypt(object, passKey, {
  algorithm: cipher,
  encoding: encoding,
  keys: ['company_name', 'company_mail','licenses', 'due_date','machines']
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

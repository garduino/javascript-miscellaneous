// Return if a number is prime or not
// Call as: node primos 1 3 5 9 30 44 67 88 95
// Requiere install of primality package as node install primality

var primality = require('primality');

process.argv.forEach(function (val, index, array) {
  console.log(val + ' isPrime ' + primality(val));
});


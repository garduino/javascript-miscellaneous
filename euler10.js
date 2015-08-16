// Find the sum of all the primes below two million.
// Requires install of primality package as node install primality

var primality = require('primality');
var n = 0;

for (var i=1; i<2000000; i++) {
	
	if (primality(i)) {
		var n = n + i;
   	}
}
console.log('The sum of all the primes below two millons is ' + n);


// Return the 10001 st primer number.
// Requires install of primality package as node install primality

var primality = require('primality');
var n = 0;

for (var i=1; i<200000; i++) {
	
	if (primality(i)) {
		var n = n + 1;
		
		if (n == 10001) {
		console.log(i + ' is 10001st prime number!' );
			}
    	}
    	// console.log(i);
}



// By considering the terms in the Fibonacci sequence whose values
// do not exceed four million, find the sum of the even-valued terms.
// Requires install of primality package as node install primality

//var i = 1;
//var one = 1;
//var two = 2;
//console.log(one, two);

//for (var i = 1; i<15; i++) {
//	
//	if (i === 1) {
//	var addition = 1;
//	} else {
//	if (i === 2) {
//	var addition = 2;
//	} else {
	
		
		
//	}
	
//	var next = i + 1;
//	var addition = i + next;
//	console.log(addition);
//	}


  //calculation

    var fibonacci = function(n){
                    if(n < 1){return 0;}
                    else if(n == 1 || n == 2){return 1;}
                    else if(n > 2){return fibonacci(n - 1) + fibonacci(n-2);}
            };

    //put in array

    var firstkfib = function(k){
                    var i;
                    var arr = [];
                    for(i = 1; i <= k; i++){
                            arr.push(fibonacci(i));
                    }
            return arr

            };

    //print

    var format = function(arr){
            return arr.join(",");
            };

    var k = 100;
    console.log("firstkfib(" + k +")");
    console.log(format(firstkfib(k)));



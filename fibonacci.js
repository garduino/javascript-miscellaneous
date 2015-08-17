var fibonacci = require ('fibonacci');

fibonacci.on ('result', function (num) {
  console.log (num.iterations +' / '+ num.number +'\n');
  if (num.ms > 30) {
    console.log ('Done!');
    fibonacci.kill ();
  }
});
 
// run this AFTER everything 
fibonacci.iterate ();
// Reading arguments 
// http://stackoverflow.com/questions/4351521/how-to-pass-command-line-arguments-to-node-js
// call me as: node readingArguments 1 2 3
// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
// Taken from https://docs.nodejitsu.com/articles/file-system/how-to-write-files-in-nodejs
fs = require('fs');
fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

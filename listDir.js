// Taken from https://docs.nodejitsu.com/articles/file-system/how-to-search-files-and-directories-in-nodejs
fs = require('fs');

fs.readdir(process.cwd(), function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
});

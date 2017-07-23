var loki = require('lokijs');
  // db = new loki('test.json'),

// var db2 = new loki('test.json');

var db2 = new loki('test.db', {
	autoload: true,
	autoloadCallback : databaseInitialize,
	autosave: true, 
	autosaveInterval: 4000
});

// console.log(db2.data);

db2.loadDatabase({}, function () {
  var users2 = db2.getCollection('users')
  console.log(db2.data);
});

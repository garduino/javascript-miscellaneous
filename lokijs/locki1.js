var loki = require('lokijs'),
  db = new loki('test.db'),
  db2 = new loki('test.db');

var users = db.addCollection('users');
users.insert({
  name: 'joe'
});
users.insert({
  name: 'john'
});
users.insert({
  name: 'jack'
});

console.log(users.data);
db.saveDatabase();

db2.loadDatabase({}, function () {
  var users2 = db2.getCollection('users')
  console.log(db2.data);
});

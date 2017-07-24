var loki = require('lokijs');
var LokiFSCipherAdapter = require('loki-fs-cipher-adapter');


var adapter = new LokiFSCipherAdapter({"password": "loki"});
    var db = new loki("testdb.db", {
        autoload: true,
        autoloadCallback : loadHandler,
        autosave: true,
        autosaveInterval: 1000,
        adapter: adapter
    });
    function loadHandler(err) {
        if (err && err instanceof Error) {
            console.log(err.message);
        } else {
            // if database did not exist it will be empty so I will intitialize here 
            var users = db.getCollection('users');
            if (users === null) {
                users = db.addCollection('users');
            }
            users.insert({
                id: 'Naveen',
                age: 25,
                address: 'Germany'
            });
            console.log(users.find({}));
        }
    }
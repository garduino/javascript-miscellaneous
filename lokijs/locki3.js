var loki = require('lokijs');

   var db = new loki('test1.db', { 
          env: 'NODEJS', 
          autoload: true,
          autoloadCallback: function() {
            var contacts = db.getCollection('contacts');
            
            // if the database did not exist we will initialize empty database here
            if (contacts === null) {
              contacts = db.addCollection('contacts');
              contacts.insert({name: 'joe', age: 39, firstLanguage: 'italian'});
              contacts.insert({name: 'dave', age: 30, firstLanguage: 'english'});
              contacts.insert({name: 'tim', age: 30, firstLanguage: 'english'});
              contacts.insert({name: 'jonas', age: 30, firstLanguage: 'swedish'});
              contacts.insert({name: 'pedro', age: 30, firstLanguage: 'spanish'});
            }
            
            console.log(contacts);
            // db.apply();
          },
          autosave : true,
          autosaveInterval : 5000
        }
      );
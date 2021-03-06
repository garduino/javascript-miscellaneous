
// Create a datastore
var loki = require('lokijs'), db = new loki('testdr.db');

// Create a collection
var doctors = db.addCollection('doctors');

// Insert some records
doctors.insert({ name: 'David Tennant', doctorNumber: 10 }); 
doctors.insert({ name: 'Matt Smith', doctorNumber: 11 });

// Create a dynamic view
var view = doctors.addDynamicView('newerDoctors'); 
view.applyWhere(function (obj) { return obj.doctorNumber > 8; });
view.applySimpleSort('doctorNumber', true);

console.log('*************************** Ahora view.data *****************************');
console.log(db);
view.data();

// Add two more doctors
doctors.insert({
 name: 'Paul McGann', doctorNumber: 8
});
doctors.insert({
 name: 'Peter Capaldi', doctorNumber: 12
});
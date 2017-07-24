
// Tomado de https://gist.github.com/seriousme/122684ca0396dbd6262f

var cryptedFileAdapter = require('./lokiCryptedFileAdapter');
cryptedFileAdapter.setSecret('mySecret');


var loki=require('lokijs');
var db = new loki('loki.json.crypted',{ adapter: cryptedFileAdapter });
db.loadDatabase({},function(){
	var children = db.addCollection('children');
	children.insert({name:'Bleep', legs: 2});
	db.save();
})
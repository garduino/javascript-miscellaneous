// var date = new Date();
// var datep = new Buffer(date.toUTCString() + "rn");
// var dates = date.toUTCString();
// var date1 = new Date(year, month, day, hour, minute, second, millisecond);

// var dateISO = new Date().toISOString().
//  replace(/T/, ' ').      // replace T with a space
//  replace(/\..+/, '')     // delete the dot and everything after

var date = new Date();
// var date2 = date1.getFullYear().toString,date1.getMonth().toString,date1.getHours().toString,+date1.getMinutes.toString(),date1.getSeconds().toString,date1.getMilliseconds().toString;
var dateY = date.getFullYear().toString();

// Se suma 1 porque js numera los meses de 0 a 11
var dateM1 = date.getMonth() + 1;
var dateM = dateM1.toString()

var dateD = date.getDate().toString();

var dateH = date.getHours().toString();

var dateMin = date.getMinutes().toString();

var dateS = date.getSeconds().toString();

var dateMill = date.getMilliseconds().toString();

var dateF = dateY+dateM+dateD+dateH+dateMin+dateS+dateMill;

var d = date.toISOString();

console.log(d);
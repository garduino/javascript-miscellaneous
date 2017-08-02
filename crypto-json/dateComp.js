// Get the current date at midnight.  
var now = new Date();   
var todayAtMidn = new Date(now.getFullYear(), now.getMonth(), now.getDate());  

// Set specificDate to a specified date at midnight.  
var specificDate = new Date("12/31/2017");  

// Compare the two dates by comparing the millisecond  
// representations.  
// if (todayAtMidn.getTime() == specificDate.getTime()) 
if (todayAtMidn.getTime() <= specificDate.getTime())
{  
    console.log("Licencia Vigente");  
}  
else  
{  
    console.log("Licencia Expirada");  
}  


var license = new Object();  
license.company = "Super Company";
license.email = "info@supercompany.com";
license.dueDate = "12/31/2017";  

license.getDueDate =   
    function () {  
        return this.dueDate;  
    };  


console.log(license);

console.log('La edad es: '+ license.getDueDate());


var cryptoJSON = require('crypto-json')
// var cipher = 'camellia-128-cbc'
var cipher = 'aes-256-cbc'
var passKey = 'weoiusdv98235iujsdkfuweuelwekjgwe8iyu23iu4jhw'
var encoding = 'hex'

var encrypted = cryptoJSON.encrypt(license, passKey, {
  algorithm: cipher,
  encoding: encoding,
  // En keys van las que NO se encriptan
  // keys: ['machines']
})
 
console.dir(encrypted) // => 

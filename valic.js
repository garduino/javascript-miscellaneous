var licenseKey = require('licensekey');

var userInfo = {company:"miempresa.com",street:"Avellaneda 399", city:"Rosario", state:"Santa Fe", zip:"2000"}

var userLicense = {info:userInfo, prodCode:"NOLSU100", appVersion:"1.0", osType:'WIN', license:"XU0W7-YB63F-06UTV-F8D56-4FB86-F8EC7"}
 
try{
    var license = licenseKey.validateLicense(userLicense, userLicense.license);
    console.log(license);
}catch(err){
    console.log(err);
}
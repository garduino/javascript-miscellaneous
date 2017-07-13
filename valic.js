var licenseKey = require('licensekey');

var userInfo = {company:"lasegunda.com",street:"Bv. Oronio 399", city:"Rosario", state:"Santa Fe", zip:"2000"}

var userLicense = {info:userInfo, prodCode:"LEN100120", appVersion:"1.5", osLock:true, license:"7130-2074-776U-TY33-6431-415E-770C-6DD"}
 
try{
    var license = licenseKey.validateLicense(userLicense);
    console.log(license);
}catch(err){
    console.log(err);
}
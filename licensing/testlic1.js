const licensekey = require('licensekey');

var userinfo = {name: "gonzalo", nickname: "gonisimchuk"}
var userLicense = {info: userinfo, prodCode:"LEN100120", appVersion:"1.5", osType:'IOS8'}
// Create
let license;

try{
license = licensekey.createLicense(userLicense)
console.log(license);
}catch(err){
console.log(err);
}

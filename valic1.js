
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

// Validate
var validateLicense = {info: userinfo, prodCode:"LEN100120", appVersion:"1.5", osType:'IOS8'}
try {
var vallicense = licensekey.validateLicense(validateLicense, license.license);
console.log('vallicense', validateLicense, license.license);
console.log(vallicense);

}
catch(err) {
console.log(err);
}
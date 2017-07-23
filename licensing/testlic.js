var licenseKey = require("licensekey")

var userInfo = {company:"miempresa.com",street:"Avellaneda 399", city:"Rosario", state:"Santa Fe", zip:"2000"}

console.log(userInfo);

// Create User License

var userLicense = {info:userInfo, prodCode:"NOLSU100", appVersion:"1.0", osType:'WIN'}

try{
        var license = licenseKey.createLicense(userLicense)
        console.log(license);   

    }catch(err){

    console.log(err);

    }


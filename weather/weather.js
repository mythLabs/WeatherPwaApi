const request = require('request');


var getWeather = (Latitude,Longitude,callback) => {
    request({
        url:`https://api.darksky.net/forecast/55d699a8980dec39399c6b235d615b5c/${Latitude},${Longitude}?units=si`,
          // url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
          json:true
      },(error,response,body) => {
        if(!error && response.statusCode == 200) {
            callback(undefined,{
                body:body
            });
        } else  {
            callback(error);
        } 
        
      })
}

module.exports.getWeather=getWeather;
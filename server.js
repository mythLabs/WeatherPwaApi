var express = require('express');
const weather =require('./weather/weather.js');
var bodyParser = require('body-parser');
var cors = require('cors')
const port=process.env.PORT || 3000;

var app = express();
app.use(cors())
app.use(bodyParser.json());

app.post('/getWeather',(req,res) => {
   console.log('in');
   console.log(req.body);
    weather.getWeather(req.body.latitude,req.body.longitude,(errorMessage,result) => {
        
        if(errorMessage) {
            res.send({errorMessage});
        } else if(result) {
            res.send({result});
          //console.log(`It's currently ${result.temperature}`);
        }
  });
 });

app.listen(port,() => {
    //console.log('listening at 3000');
})
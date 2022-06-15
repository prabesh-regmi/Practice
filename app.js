const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{

  res.sendFile(__dirname + "/index.html");

});

app.post("/",(req,res)=>{
  const city = req.body.city;
  const units ="metric";
  const appid = "8376ab574e5673fe65084b974027497f"
  url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units="+ units +"&appid="+ appid;
  https.get(url,(response)=>{
    if (response.statusCode===200){
      response.on("data",(data)=>{
        const weatherData = JSON.parse(data);
        console.log(weatherData);
        const temp = weatherData.main.temp;
        const weatherDescription =weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageSrc="https://openweathermap.org/img/wn/" + icon + "@2x.png";
        console.log(icon);
        console.log(imageSrc);
        // console.log(temp);
        // console.log(weatherDescription);
        // res.write("<h1>The temperature in "+ city +" is " + temp + " degrees Celcius.</h1>");
        // res.write("<p> The weather condition is " + weatherDescription + "</p>");
        // res.write("<img src= " + imageSrc + " alt='Cannot load'>");
        // res.send();
        res.send({city:city,weatherDescription:weatherDescription,temp:temp,imageSrc:imageSrc})

      });
    }
    else{
        res.send("<h1>Enter valid City!!!</h1>");
    }
  });


});
app.listen(3000,()=>{
  console.log("Server is running:");
})

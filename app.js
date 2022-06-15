const express = require('express');
const bodyParser = require('body-parser');
const cmodule= require(__dirname + "/modules.js");
const app = express();
app.set('view engine', "ejs");

console.log(cmodule.first());
app.get("/", (req, res) => {
    const date = new Date();
    res.render("index", {day:date.getMilliseconds()});
});

app.listen(3000, (req, res) => {
    console.log("Server is started:")
})
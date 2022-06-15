const express = require("express");
const bodyParser = require("body-parser");
const request = require('request');

app = express();
app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});



app.get("/signup", (req, res) => {
    
        res.sendFile(__dirname + "/signup.html");
});

app.post("/signup", (req, res) => {
    var fName = req.body.fName;
    var lName = req.body.lName;
    var email = req.body.email;
    var password = req.body.password;
    console.log("Name: " + fName + " " + lName + " " + "email: " + email + " " + "password: " + password);
    res.send({ result: "redirect", url: "/login" })
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});
app.listen(4000, (req, res) => {
    console.log("Server is running...")
});
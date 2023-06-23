
const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");


const app = express();
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("login.ejs");
});
app.get("/home", function(req, res){
    res.render("home.ejs");
});

app.post("/home", function(req, res){
    const username = req.body.Username;
    const password = req.body.password;

    console.log("s")

});









app.listen(3000, function(req, res){
    console.log("Port succesfully running on port 3000");
});


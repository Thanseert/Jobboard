
const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");


const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));


app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/create", function(req, res){
    res.render("create.ejs");
});
app.post("/create", function(req, res){
    res.redirect("/postjob");
});


// app.post("/postjob", function(req, res){
//     res.redirect("/postjob")
// }); 
// create database 

app.get("/postjob", function(req, res){
    res.render("postjob.ejs");
});


app.get("/login", function(req, res){
    res.render("login.ejs");
});












app.listen(3000, function(req, res){
    console.log("Port succesfully running on port 3000");
});


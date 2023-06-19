
const express = require("express");
const bodyparser = require("body-parser");


const app = express();

app.get("/", function(req, res){
    res.send("Testing");
});


app.listen(3000, function(req, res){
    console.log("Port succesfully running on port 3000");
});


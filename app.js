
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



// const app = express()
// app.use(express.static("public"));
// app.set('view engine', 'ejs');

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: false }));



mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/JobDB", {UseNewUrlParser: true});

const JobSchema = new mongoose.Schema({
    jobtitle: String,
    company: String,
    location: String,
    description: String,
    requirement: String,
    salary: String
});

const Job = mongoose.model('Job', JobSchema);



app.get("/", function(req, res){
    res.render("home.ejs");
});
  

app.post("/", async function(req, res){
    const what = req.body.what;
    const where = req.body.where;


    try {
        const result = await Job.find({ jobtitle: what, location: where }).exec();
        res.render("/searchresults.ejs", { jobs: result });
        console.log(result);
        // error in the rendering process
    } catch(error) {
        console.log(error);
    }
});

app.get("/searchresults", function(req, res) {
    res.render("searchresults.ejs");
});

app.get("/create", function(req, res){
    res.render("create.ejs");
});
app.post("/create", function(req, res){
    res.redirect("/postjob");
});


app.post("/postjob", function(req, res){
    const jobtitle = req.body.jobtitle;
    const company = req.body.company;
    const location = req.body.location;
    const description = req.body.description;
    const requirement = req.body.requirement;
    const salary = req.body.salary;


    const newJob = new Job({
        jobtitle: jobtitle,
        company:company,
        location:location,
        description:description,
        requirement:requirement,
        salary:salary
    });

    newJob.save()
    .then(() =>{
        console.log("successfull!");
        res.redirect("/");
    })
    .catch((error) => {
        console.log("error", error);
        res.redirect("/");
    });
}); 
 

app.get("/postjob", function(req, res){
    res.render("postjob.ejs");
});


app.get("/login", function(req, res){
    res.render("login.ejs");
});


app.get("/companyreviews", function(req, res){
    res.render("Reviews.ejs");
});









app.listen(3000, function(req, res){
    console.log("Port succesfully running on port 3000");
});


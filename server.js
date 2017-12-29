// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var exphbs = require("express-handlebars");
var path = require("path");

var Portfolio = require("./data/portfolio.js");
var Sketches = require("./data/sketches.js");


//Initialize express
var app = express();

//Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

//Make public a static dir
app.use(express.static(__dirname + "/public"));

//Setup handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



//Routes
app.get("/", function(req, res) {
  res.render("sketch");
});

app.get("/portfolio", function(req, res) {
    res.render("portfolio", { port: Portfolio });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/sketches", function(req, res) {
  res.render("sketches", {sketch: Sketches});
});

app.get("/sketch09-18-17", function(req, res) {
  res.render("sketch09-18-17");
});

app.get("/sketch09-19-17", function(req, res) {
  res.render("sketch09-19-17");
});

app.get("/sketch09-20-17", function(req, res) {
  res.render("sketch09-20-17");
});

app.get("/sketch09-21-17", function(req, res) {
  res.render("sketch09-21-17");
});

app.get("/sketch09-23-17", function(req, res) {
  res.render("sketch09-23-17");
});

app.get("/sketch09-25-17", function(req, res) {
  res.render("sketch09-25-17");
});

app.get("/sketch09-26-17", function(req, res) {
  res.render("sketch09-26-17");
});

app.get("/sketch09-27-17", function(req, res) {
  res.render("sketch09-27-17");
});

app.get("/sketch09-28-17", function(req, res) {
  res.render("sketch09-28-17");
});

app.get("/sketch10-4-17", function(req, res) {
  res.render("sketch10-4-17");
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

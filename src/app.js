
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
//db
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12596627",
  password: "1UKzBH9irm",
  database: "sql12596627"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!")
});




// Template engine
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

//Middleware
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home", {
    style: "home.css",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    style: "login.css",
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    style: "register.css",
  });
});

app.get("/forgotpass", (req, res) => {
  res.render("forgotpass");
});

app.listen(port,()=>{console.log("Port running:"+port)});

// const express = require("express");
// const app = express();
// const port=3000
// const exphbs = require("express-handlebars");
// var bodyParser = require("body-parser");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const path= require('path');
// // const multer = require("multer");
// // const upload = multer();
// global.__dirname=__dirname;

// app.use(cors());
// app.use(morgan("common"));
// app.use(bodyParser.json({ limit: "50mb" }));
// // app.use(cookieParser());

// app.use(express.static(path.join(__dirname,'/src/resourses')));
// app.engine("hbs", exphbs.engine({extname:'.hbs'}));
// app.set("view engine", ".hbs");
// app.set('views',path.join(__dirname,'/src/views'));
// app.get('/',(req,res)=>{
//   res.render("home");
// })

// app.use(express.static('public'));

// // url: http://localhost:3000/login
// app.get('/login',(req,res)=>{
//   res.render('login')
// })

// app.get('/register',(req,res)=>{
//   res.render('register')
// })

// app.get('/forgotpass',(req,res)=>{
//   res.render('forgotpass')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

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
  res.render("home");
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

app.listen(port);

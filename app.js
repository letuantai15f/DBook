const express = require("express");
const app = express();
const port=3000
const exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const path= require('path');
// const multer = require("multer");
// const upload = multer();
global.__dirname=__dirname;

app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "50mb" }));
// app.use(cookieParser());


app.use(express.static(path.join(__dirname,'/src/resourses')));
app.engine("hbs", exphbs.engine({extname:'.hbs'}));
app.set("view engine", ".hbs");
app.set('views',path.join(__dirname,'/src/views'))

app.get('/',(req,res)=>{
  res.render("home");
})

// url: http://localhost:3000/login
app.get('/login',(req,res)=>{
  res.render('login')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
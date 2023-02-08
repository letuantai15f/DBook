const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
require('dotenv').config()
const api = require("./routes/api");




// Template engine
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

//Middleware
// app.use(express.urlencoded());
app.use(express.json());
app.use("/api", api);

app.get("/", (req, res) => {
  res.render("home", {
    style: "home.css",
    trang: "modal_signup"
  });
});

app.get("/login", (req, res) => {
  res.render("auth", {
    style: "auth.css",
    isLogin: true
  });
});

app.get("/register", (req, res) => {
  res.render("auth", {
    style: "auth.css",
    isRegister: true
  });
});

app.get("/forgotpass", (req, res) => {
  res.render("auth", {
    style: "auth.css",
    isEmailXacThuc: true
  });
});

app.get("/xacthuc", (req, res) => {
  res.render("auth", {
    style: "auth.css",
    isXacThucMa: true
  });
});

app.get("/resetpassword", (req, res) => {
  res.render("auth", {
    style: "auth.css",
    isResetPass: true
  });
});



app.listen(port);
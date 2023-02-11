const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
require('dotenv').config()
const api = require("./routes/api");
const routerAuth = require("./routes/auth/Auth");
const routerHome = require("./routes/home/Home");



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
app.use("/auth", routerAuth);
app.use("/home", routerHome);


app.listen(port);
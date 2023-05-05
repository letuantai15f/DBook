const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
var bodyParser = require("body-parser");
const app = express();
const port = 6001;
const http = require('http')
const { Server } = require('socket.io')
require("dotenv").config();
const api = require("./routes/api");
var multer = require("multer");
var upload = multer();
const tuVan = require('../fpg');
const chat=require('../src/middlewares/chat')

// swap

const expressSwagger = require("express-swagger-generator")(app);
let options = {
  swaggerDefinition: {
    openapi: "2.0.0",
    info: {
      description: "Api Dbok",
      title: "Real Estate",
      version: "1.0.0",
    },
    host: process.env.SWAGGER_HOST,
    basePath: "/api",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "",
      },
    },
    response: {
      200: {
        message: "success",
      },
    },
  },
  basedir: __dirname,
  files: ["./routes/**/*.js", "./models/**/*.js", "./api/**/*.js", "./controller/**/index.js"], //Path to the API handle folder
};
expressSwagger(options);



// Post Data
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors())
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const server = http.createServer(app);
global.io = new Server(server, {
  cors: {
    origin: "http://localhost:3000" || "http://35.240.176.171:3000" ,
    methods: ["GET", "POST"],
  },
});
chat.chat()

// app.use(upload.array());
let i = 0
tuVan.fpGrowth();
setInterval(function () {
  if (i == 15) {
    global.trieuChung= tuVan.fpGrowth()
    i = 0;
  } else {
    i++
  }
}, 2147483647);

app.use("/api", api);
server.listen(port);


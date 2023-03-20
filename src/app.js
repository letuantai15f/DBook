const express = require("express");
const morgan = require("morgan");
const cors=require('cors')
const exphbs = require("express-handlebars");
const path = require("path");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
require("dotenv").config();
const api = require("./routes/api");
var multer = require("multer");
var upload = multer();

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

// Template engine
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(express.static(path.join(__dirname, "public")));
// Post Data
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors())
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
    })
);
app.use(upload.array());


app.use(express.json());
app.use("/api", api);

app.listen(port);

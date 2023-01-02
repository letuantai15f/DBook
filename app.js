const express = require("express");
const app = express();
const port=3000
const exphbs = require("express-handlebars");
const path= require('path');
global.__dirname=__dirname;

app.engine("hbs", exphbs.engine({extname:'.hbs'}));
app.set("view engine", ".hbs");
app.set('views',path.join(__dirname,'views'))



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
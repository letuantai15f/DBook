const epxress = require("express");

const routerHome = epxress.Router();

routerHome.get("/trang-chu", (req, res) => {
  res.render("home", {
    style: "home.css",
  });
});

module.exports = routerHome;

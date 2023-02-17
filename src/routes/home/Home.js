const epxress = require("express");

const routerHome = epxress.Router();

routerHome.get("/trang-chu", (req, res) => {
  res.render("home", {
    style: "trang-chu.css",
    isTrangChu: true,
  });
});

routerHome.get("/gioi-thieu", (req, res) => {
  res.render("home", {
    style: "gioi-thieu.css",
    isGioiThieu: true,
  });
});


module.exports = routerHome;

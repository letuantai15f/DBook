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

routerHome.get("/dat-lich", (req, res) => {
  res.render("home", {
    style: "dat-lich.css",
    isDatLich: true,
  });
});

module.exports = routerHome;

const epxress = require("express");

const routerAuth = epxress.Router();

routerAuth.get("/login", (req, res) => {
  res.render("auth", {
    style: "auth.css",
    isLogin: true,
  });
});

routerAuth.get("/register", (req, res) => {
  res.render("auth", {
    style: "auth.css",
    isRegister: true,
  });
});

routerAuth.get("/forgotpass", (req, res) => {
  res.render("auth", {
    style: "auth.css",
    isEmailXacThuc: true,
  });
});

routerAuth.get("/xacthuc", (req, res) => {
  res.render("auth", {
    style: "auth.css",
    isXacThucMa: true,
  });
});

routerAuth.get("/resetpassword", (req, res) => {
  res.render("auth", {
    style: "auth.css",
    isResetPass: true,
  });
});

module.exports = routerAuth;

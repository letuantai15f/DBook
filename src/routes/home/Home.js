const epxress = require("express");

const routerHome = epxress.Router();

routerHome.get("/", (req, res) => {
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

routerHome.get("/khoa", (req, res) => {
  res.render("home", {
    style: "khoa.css",
    isKhoa: true,
    khoa: [
      {
        id: 1,
        ten_khoa: "Khoa da lieu",
        img: "https://tamanhhospital.vn/wp-content/uploads/2020/12/khoa_capcuu.png",
      },
      {
        id: 2,
        ten_khoa: "Khoa da lieu",
        img: "https://tamanhhospital.vn/wp-content/uploads/2020/12/khoa_capcuu.png",
      },
      {
        id: 3,
        ten_khoa: "Khoa da lieu",
        img: "https://tamanhhospital.vn/wp-content/uploads/2020/12/khoa_capcuu.png",
      },
      {
        id: 4,
        ten_khoa: "Khoa da lieu",
        img: "https://tamanhhospital.vn/wp-content/uploads/2020/12/khoa_capcuu.png",
      },
      {
        id: 5,
        ten_khoa: "Khoa da lieu",
        img: "https://tamanhhospital.vn/wp-content/uploads/2020/12/khoa_capcuu.png",
      },
      {
        id: 6,
        ten_khoa: "Khoa da lieu",
        img: "https://tamanhhospital.vn/wp-content/uploads/2020/12/khoa_capcuu.png",
      },
    ],
  });
});

module.exports = routerHome;

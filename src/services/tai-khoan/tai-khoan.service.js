const { Op } = require("sequelize");
const TaiKhoan = require("../../models/TaiKhoan/tai-khoang.model");
const BacSi = require("../../models/BacSi/bac-si.model");
const NhanVien = require("../../models/NhanVien/nhan-vien.model");
const BenhNhan = require("../../models/BenhNhan/benh-nhan.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mailer=require('../../utils/mailer')
 
const createTaiKhoan = async (data) => {
  try {
    const mat_khau = changePass(data.mat_khau);
    if (mat_khau) {
      const taiKhoan = await TaiKhoan.create({
        tai_khoan: data.tai_khoan,
        mat_khau: mat_khau,
        quyen: data.quyen,
        trang_thai: "Created",
      });
      bcrypt.hash(taiKhoan.tai_khoan,parseInt(process.env.BRYPT_SALT_ROUND)).then((hashEmail)=>{
        console.log(`${process.env.APP_URL}/api/verify?email=${taiKhoan.tai_khoan}&token=${hashEmail}`);
        mailer.sendMail(taiKhoan.tai_khoan,"Verify Email",`<a href="${process.env.APP_URL}/api/verify?email=${taiKhoan.tai_khoan}&token=${hashEmail}"> Xác thực tài khoản </a>`)
      })
      return taiKhoan;
    }
  } catch (error) {
    console.log(error);
  }
};
const login = async (data) => {
  try {
    const taiKhoan = await TaiKhoan.findOne({
      where: { tai_khoan: data.tai_khoan },
    });
    if (taiKhoan && taiKhoan.verify=='Verified') {
      let check = bcrypt.compareSync(data.mat_khau, taiKhoan.mat_khau);
      if (check) {
        let user;
        switch (taiKhoan.quyen) {
          case 1:
            user = taiKhoan;
            break;
          case 2:
            user = await BacSi.findOne({
              where: { tai_khoan_id: taiKhoan.id },
            });
            break;
          case 3:
            user = await NhanVien.findOne({
              where: { tai_khoan_id: taiKhoan.id },
            });
            break;
          case 4:
            user = await BenhNhan.findOne({
              where: { tai_khoan_id: taiKhoan.id },
            });
            break;
          default:
            break;
        }
        const payload = { id: user.id, quyen: taiKhoan.quyen };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        return {
          token: token,
          userID: user.id,
          quyen: taiKhoan.quyen,
          hoTen: user.ho_ten,
        };
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
const getTaiKhoan = async (data) => {
  const tai_khoan=data.email
    return await TaiKhoan.findOne({ where: { tai_khoan:tai_khoan } })
}
const changePass = (passWord) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(passWord, salt);
  return hash;
};
const verifyEmail=async(email)=>{
    try {
      return await TaiKhoan.update({verify:'Verified'},{where:{tai_khoan:email}})
    } catch (error) {
      console.log(error);
      return null
    }
}
module.exports = { createTaiKhoan, login, getTaiKhoan,verifyEmail };

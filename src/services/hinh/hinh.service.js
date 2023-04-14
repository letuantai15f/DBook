const { Storage } = require('@google-cloud/storage')
let projectId = "prime-micron-379903";
let keyFilename = "mykey.json"
const storage = new Storage({
    projectId,
    keyFilename,
})
const BenhNhan = require('../../models/BenhNhan/benh-nhan.model')
const NhanVien = require('../../models/NhanVien/nhan-vien.model')
const BacSi = require('../../models/BacSi/bac-si.model')
const bucket = storage.bucket('dbook2')

const uploadHinh = async (data, name) => {
    try {
        const blob = bucket.file(name + ".jpg");
        const blobStream = blob.createWriteStream();
        blobStream.on("finish", () => {
            console.log("Success");
        });
        if (data.buffer == undefined) {
            blobStream.end(data[0].buffer);
        } else {
            blobStream.end(data.buffer);
        }

        return true
    } catch (error) {
        console.log(error);
        return false
    }

}
const getHinh = async () => {
    try {
        return await bucket.getFiles();
    } catch (error) {
        return false
    }
}
const uploadHinhUser = async (id, quyen, data, name) => {
    try {
        switch (quyen) {
            case 4:
                const benhNhan = await BenhNhan.findOne({ where: { id } })
                if (benhNhan) {
                    const status = uploadHinh(data, name)
                    if (status) {
                        await BenhNhan.update({ hinh: "https://storage.googleapis.com/dbook2/" + name + ".jpg" }, { where: { id } })
                        return true
                    }
                }
                break;
            case 3:
                const nhanVien = await NhanVien.findOne({ where: { id } })
                if (nhanVien) {
                    const status = uploadHinh(data, name)
                    if (status) {
                        await NhanVien.update({ hinh: "https://storage.googleapis.com/dbook2/" + name + ".jpg" }, { where: { id } })
                        return true
                    }
                }
                break;
            case 2:
                const bacSi = await BacSi.findOne({ where: { id } })
                if (bacSi) {
                    const status = uploadHinh(data, name)
                    if (status) {
                        await BacSi.update({ hinh: "https://storage.googleapis.com/dbook2/" + name + ".jpg" }, { where: { id } })
                        return true
                    }
                }
                break;
            default:
                break;
        }
    } catch (error) {
        return false
    }
}
module.exports = { uploadHinhUser, getHinh, uploadHinh }
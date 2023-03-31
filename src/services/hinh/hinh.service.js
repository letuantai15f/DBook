const { Storage } = require('@google-cloud/storage')
let projectId = "prime-micron-379903";
let keyFilename = "mykey.json"
const storage = new Storage({
    projectId,
    keyFilename,
})
const TaiKhoan=require('../../models/TaiKhoan/tai-khoang.model')
const bucket = storage.bucket('dbook2')

const uploadHinh = async (data,name) => {
    try {
        const blob = bucket.file(name+".jpg");
        const blobStream = blob.createWriteStream();
        blobStream.on("finish", () => {
            console.log("Success");
        });
        blobStream.end(data.buffer);
        return true
    } catch (error) {
        console.log(error);
        return false
    }

}
const getHinh=async()=>{
    try {
       return await bucket.getFiles();
      } catch (error) {
        return false
      }
}
const uploadHinhUser=async(id,data,name)=>{
    try {
        const taiKhoan=await TaiKhoan.findOne({where:{id}})
        if(taiKhoan){
            const status=uploadHinh(data,name)
            if(status){
                await TaiKhoan.update({hinh:"https://storage.googleapis.com/dbook2/"+name+".jpg"},{where:{id}})
                return true
            }
        }
    } catch (error) {
        return false
    }
}
module.exports = { uploadHinhUser,getHinh }
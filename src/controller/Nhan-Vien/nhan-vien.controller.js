const nhanVienService=require('../../services/NhanVien/nhan-vien.service')

const createNhanVien=async(req,res,next)=>{
    try {
        const nhanVien=await nhanVienService.createNhanVien(req.body)
        return res.status(200).json(nhanVien)
    } catch (error) {
        console.log(error);
    }
}
const deleteNhanVien=async(req,res,next)=>{
    try {
        const id=req.query.id
        await nhanVienService.deleteNhanVien(id)
            return res.status(200).json({message:"Deleted"})
    } catch (error) {
        console.log(error);
    }
}

module.exports={createNhanVien,deleteNhanVien}
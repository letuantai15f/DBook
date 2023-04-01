const BacSi=require('../../models/BacSi/bac-si.model')
const taiKhoanService = require('../../services/tai-khoan/tai-khoan.service')


const getBacSi=async()=>{
    return await BacSi.findAll()
}
const createBacSi=async(data)=>{
    try {
        //email,sdt check them
        const checkBacSi=await BacSi.findOne({where:{cccd:data.cccd}})
        if(checkBacSi){
            return;
        }else{
            data.tai_khoan=data.email;
            data.quyen = 2;
            data.mat_khau= "123456";
            data.trang_thai="Created"
            const taiKhoan = await taiKhoanService.createTaiKhoan(data)
            if (taiKhoan) {
                data.tai_khoan_id = taiKhoan.id
                const bacSi =  await BacSi.create(data)
                return bacSi
            }
        
        }
    } catch (error) {
        console.log(error);
    }
}
const deleteBacSi=async(id)=>{
    return await BacSi.update({trang_thai:"Deleted"},{where:{id}})
}
const updateBacSi=async(id,data)=>{
    return await BacSi.update(data,{where:{id}})
}
const findBacSi=async()=>{
    try {
        return await BacSi.findOne({where:{
            [Op.or]:[{email:data.email},{cccd:data.cccd},{sdt:data.sdt}]
        }})
    } catch (error) {
        console.log(error);
    }
}
const cancelLich=async(id)=>{
    
}
module.exports={
    getBacSi,
    createBacSi,
    deleteBacSi,
    updateBacSi,findBacSi
}
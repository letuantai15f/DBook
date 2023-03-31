
const hinhService=require('../../services/hinh/hinh.service')


const getListFiles = async (req, res,next) => {
    try {
        const hinh=await hinhService.getHinh()
        return res.status(200).json(hinh)
    } catch (error) {
        console.log(error);
    }
  };
 
const uploadHinh=async(req,res,next)=>{
    try {
        const id=req.user.id
        const hinh=req.file
        const name=Date.now()
        if(hinh && id){
           const status= hinhService.uploadHinhUser(id,hinh,name)
           if(status){
            return res.status(200).json({message:"Sucess"})
           }else{
            return res.status(404).json({message:"Erro"})
           }
        }else{
            return res.status(404).json({message:"Erro"})
        }
    } catch (error) {
        next()
    }
}

module.exports={uploadHinh,getListFiles,}
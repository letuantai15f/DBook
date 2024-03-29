
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
        const quyen=req.user.quyen
        const hinh=req.file
        const name=Date.now()
        if(hinh && id){
           const status= hinhService.uploadHinhUser(id,quyen,hinh,name)
           if(status){
            return res.status(200).json({url:"https://storage.googleapis.com/dbook2/" + name + ".jpg"})
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
const router=require("express").Router();
const Patient=require("../modal/Patient")


router.post("/",async(req,res)=>{
    const response=await new Patient({
        name:req.body.name,
        address:req.body.address,
        email:req.body.email,
        mobile:req.body.mobile,
        password:req.body.password,
        photo:req.body.photo
        
    }).save();

    res.status(200).send(response)
})

module.exports=router
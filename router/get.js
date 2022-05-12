const router =require("express").Router();
const Patient=require("../modal/Patient.js");

router.get("/",async(req,res)=>{
    const response=await Patient.find();

    res.status(200).send(response);
});

module.exports=router;
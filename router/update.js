const router=require("express").Router();
const Patient=require("../modal/Patient")

const { uploadSingle} = require("../middleware/uploads.js");


router.post("/", uploadSingle("photos"),async(req,res)=>{
    const filter={_id:req.body._id};

    const update={
        name:req.body.name,
        address:req.body.address,
        email:req.body.email,
        mobile:req.body.mobile,
        password:req.body.password,
        photo:req.body.photo

    }
    let up=await Patient.findByIdAndUpdate(filter,update)
    res.status(200).send(up);
});

module.exports=router;
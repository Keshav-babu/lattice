const mongoose=require("mongoose")

const PsychiatristSchema=new mongoose.Schema({
    firstName:{type:String,required:true,minlength:4},
    lastName:{type:String,required:true},
    hospitalName:{type:String,required:true},
    mobile:{type:Number},
    State:{type:String},
    Pin:{type:String}
})

module.exports=mongoose.model("Psychiatrist",PsychiatristSchema);
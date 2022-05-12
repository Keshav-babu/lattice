const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema({
    name:{type:String,required:true,minlength:4},
    address:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:Number,required:false,maxlength:10},
    password:{type:String,required:true,minlength:8,maxlength:18},
    photo:[{ type: String, required: false}]

},
{
    versionKey: false,
    timestamps: true,
}

)

module.exports=mongoose.model("Patient",patientSchema);
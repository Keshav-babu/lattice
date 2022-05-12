const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const app=express();
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT||8000

const CONNECTION_URL="mongodb+srv://lattice:Lattice@cluster0.ge8im.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
    CONNECTION_URL,
    //{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    {useNewUrlParser:true, useUnifiedTopology:true},
    ()=>console.log("Connected to Database")
)

//const get=require("./router/get.js")
const post=require("./router/post.js")
// const update=require("./router/update.js")

//app.use("/",get)
app.use("/post",post)
// app.use("/update",update)
app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`)
})
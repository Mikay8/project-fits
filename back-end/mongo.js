const mongoose = require("mongoose")
require("dotenv").config();
mongoose.connect(process.env.DB_LOCAL_URI)
.then(()=>{
    console.log("Mongo Connected")
})
.catch((e)=>{
    console.log("MongoDB FAILED!!!");
    console.log(e);
})

const users = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const userCollection = mongoose.model("userCollection",users)
module.exports= userCollection
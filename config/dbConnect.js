const {default:mongoose}=require('mongoose');
const dotenv=require('dotenv').config()
const dbConnect=()=>{
    try{
        const conn=mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected`)
    }
    catch(err){
        console.log(err)
    }
}
module.exports=dbConnect;
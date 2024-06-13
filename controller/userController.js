const User=require('../models/userModel');
const asyncHandler=require('express-async-handler');
const createUser=asyncHandler(async(req,res)=>{
    const emailvar=req.body.email;
    const findUser=await User.findOne({email:emailvar});
    if(!findUser){
        const user=new User(req.body);
        await user.save();
        res.json(user);
    }
    else{
        res.status(400);
        throw new Error('User already exists');
    }
})
module.exports={createUser}
const { Router } = require("express");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const user = Router();

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const User=model('user',userSchema);

user.post('/',async (req,res)=>{
  try{
    const userData=req.body;
    const {email,password}=userData
    const data=await User.findOne({"$and":[{"email":{"$eq":email}},{"password":{"$eq":password}}]});
    console.log(data)
    return res.send(data.name);
    
  }catch(error){
    console.log(error);
    return res.status(405).send("not matched")
  }
})

module.exports=user;
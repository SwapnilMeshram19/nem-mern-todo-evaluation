const { Router } = require("express");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const todo = Router();

const todoSchema = new Schema({
    taskname: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    tag:{
        type:String
    }
  });

  const Todo=model('todo',todoSchema);

  todo.post('/create',async (req,res)=>{
    try{
      const todoData=req.body;
      const {taskname,status,tag}=todoData;
      console.log(taskname);
      let data={
        taskname,
        status,
        tag
      }
      const todos=await Todo.create(data)
      return res.send(data);
      
    }catch(error){
      console.log(error);
      return res.status(405).send("not matched")
    }
  })

  todo.get('/',async (req,res)=>{

    const {status}=req.query;
    console.log(status);
    if(status){
        if(status=="pending"){
            const pendingdata=await Todo.find({"status":{"$eq":false}});
            return res.send(pendingdata)
        }else{
            const truedata=await Todo.find({"status":{"$eq":true}});
            return res.send(truedata)
        }
    }
    const todos=await Todo.find();
    return res.send(todos)
  })

  todo.get('/id/:id',async (req,res)=>{
    const todos=await Todo.findOne({"id":{"$eq":req.params.id}});
    return res.send(todos)
  })


  module.exports=todo;
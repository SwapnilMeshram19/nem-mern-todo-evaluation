const express=require('express');
const connectDB=require("./db");
const todo = require('./routes/todo.route');
const app=express();
const userRoute=require("./routes/user.route")
app.use(express.json());

async function main(){
    await connectDB();
    app.use("/user",userRoute);
    app.use('/todo',todo);
}

app.listen(3000,()=>{
    console.log('server started');
    main();
})
const express=require('express');
const connectDB=require("./db");
const app=express();

app.use(express.json());

async function main(){
    await connectDB();
}

app.listen(8080,()=>{
    console.log('server started');
    main();
})
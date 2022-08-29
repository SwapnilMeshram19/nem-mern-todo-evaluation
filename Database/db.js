const mongoose=require("mongoose");
async function connectDB(){
    return new Promise((resolve,reject)=>{
        const url='mongodb+srv://sam:sam@moviedb.gseux4l.mongodb.net/?retryWrites=true&w=majority';
        mongoose.connect(url,(error)=>{
            if(error){
                console.error('error connecting to db...',error);
                return reject(error)
            }

            console.log('connected to DB');
            resolve();
        })
    })
}

module.exports=connectDB;


const mongoose =require('mongoose');

exports.connectToDatabase = async()=>{
    mongoose.connect(process.env.DB_URI).then((data)=>{
        console.log("Database connected");
    }).catch((err)=>{
        console.log(err);
    });
}
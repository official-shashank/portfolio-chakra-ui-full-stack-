const express=require("express");
const { connectToDatabase } = require("./config/database");
const projectRouter = require("./Routes/ProjectRoute");
require("dotenv").config();


const app=express();
connectToDatabase();




app.use(express.json());
app.use(express.urlencoded({extended:true}));


// routing 

app.use("/api/v1/projects",projectRouter);




module.exports = app;

const express=require("express");
const { connectToDatabase } = require("./config/database");
const projectRouter = require("./Routes/ProjectRoute");
require("dotenv").config();
const cors=require("cors");
const skillAndExperianceRouter = require("./Routes/SkillAndExperianceRoute");
const userRouter = require("./Routes/userRoutes");

const app=express();
connectToDatabase();



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// routing 

app.use("/api/v1/user",userRouter);


app.use("/api/v1/projects",projectRouter);
app.use("/api/v1",skillAndExperianceRouter);




module.exports = app;

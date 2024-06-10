const express=require("express");
const { createUser, loginUser } = require("../controller/userController");

const userRouter=express.Router();

userRouter.route("/register").post(createUser);

userRouter.route("/login").post(loginUser);


module.exports=userRouter;

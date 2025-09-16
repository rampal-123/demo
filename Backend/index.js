import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./route/user.router.js"
import bookRoute from "./route/book.route.js"
// const express=require("express")
// const mongoose=require("mongoose")
// const dotenv=require("dotenv")
const app=express()
app.use(cors());
dotenv.config();
app.use(express.json());
const PORT=process.env.PORT || 4002
const URI=process.env.MongoDBURI;
//connect to mongodb

mongoose.connect(URI)
  .then(() => console.log(" MongoDB Connected"))
  .catch(err => console.log(" Error connecting to MongoDB:", err));

  //define routes

  app.use("/book",bookRoute);
  app.use("/user",userRoute);
;
// app.listen(PORT,()=>
// {
//    console.log('Example app listning on port ${PORT}') ;
// });
app.listen(4002);
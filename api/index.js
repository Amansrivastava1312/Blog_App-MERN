import { error } from "console";
import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 3000;
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGO)
.then(
    ()=>{
        console.log("Connected to dataBase");
    }
).catch(
    (error)=>{
        console.log(error)
    }
)



app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`)
})
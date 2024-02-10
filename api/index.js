import { error } from "console";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"


const app = express();
app.use(express.json());
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

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes)
import { error } from "console";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
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
app.use('/api/auth', authRoutes);



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
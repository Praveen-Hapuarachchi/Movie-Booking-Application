import express from "express";//connect the localhost 5000
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
dotenv.config();
const app = express();//Now express handle all operation in our app
app.use(express.json());

//middlewares
app.use("/user",userRouter);

mongoose
    .connect(
        `mongodb+srv://Praveen:${process.env.MONGODB_PASSWORD}@cluster0.vk1enm6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

    ).then(()=>
        app.listen(5000,()=>
            console.log("connected to database and server")
        )
    ).catch((e) => console.log(e));
/*
app.use("/",(req,res,next) =>{//create route
    res.send("<h1>Hello World!!</h1>");
})

app.listen(5000, () => {//server
    console.log(`Connect to localhost port ${5000}`);
})
    */


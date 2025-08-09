import express from "express"; 
import bodyParser from "body-parser"
import mongoose from "mongoose";
import studentRouter from "./routes/studentRouter.js";
//import student from "./models/Student.js";

//mongodb+srv://admin:<db_password>@cluster0.sfdum3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const app=express();


mongoose.connect("mongodb+srv://admin:1234@cluster0.sfdum3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>{

        console.log("Connected To the database");
    }
).catch(
    ()=>{
        console.log("Connection Failed");
    }
)

app.use(bodyParser.json());

app.use("/student", studentRouter);


app.listen(5000,
    ()=>{
        
        console.log("server is Running on port 5000");
    }
)
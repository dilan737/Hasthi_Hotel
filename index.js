import express from "express"; 
import bodyParser from "body-parser"
import mongoose from "mongoose";
import student from "./models/Student.js";

const app=express();

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://admin:123@cluster0.lotgyds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>{

        console.log("Connected To the database");
    }
).catch(
    ()=>{
        console.log("Connection Failed");
    }
)

app.get("/",
    (req,res)=>{

        student.find().then(
            (students)=>{
                res.json(students)
            }
        ).catch(
            ()=>{
                message:"An error Occured"
            }

        )


      
    })
app.post("/",
    (req,res)=>{

      

        const student=new student(req.body)

        student.save().then(
            ()=>{

                res.json({
                    message:"Student Saved succesfully"
                })
            }
        ).catch(
            ()=>{
                res.json(
                    {
                        message:"Student  Saved Failed"
                    }
                )
            }
        )
    }


        
    
        
        
    
)

app.delete("/",
    (req,res)=>{
        console.log(req.body)
        console.log("Get request recerived");
        res.json({message:"Hellow World"})
    })
    app.put("/",
    (req,res)=>{
        console.log(req.body)
        console.log("Get request recerived");
        res.json({message:"Hellow World"})
    })

app.listen(5000,
    ()=>{
        
        console.log("server is Running on port 5000");
    }
)
import express from 'express';

const studentRouter=express.Router();

studentRouter.get("/",(req,res)=>{
    res.json({

        message:"All student"
    })

    }
)
studentRouter.post("/",(req,res)=>{
    res.json({

        message:"Student Saved"
    })

    }
)

studentRouter.put("/",(req,res)=>{
    res.json({

        message:"Student Saved"
    })

    }
)

studentRouter.delete("/",(req,res)=>{
    res.json({

        message:"Student Saved"
    })

    }
)

export default studentRouter;
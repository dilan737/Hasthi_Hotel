import User from "../models/user.js";
import bcrypt from "bcrypt";


export function saveUser(req,res){
    const hashedPassword = bcrypt.hashSync(req.body.password,10);
    const user = new User({
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:hashedPassword
    })
    user.save().then(()=>{
        res.json({
            message:"User Saved successfully"
        })
       
    }).catch(()=>{

        res.status(500).json({
            message:"User Not Saved"
        })
    })
}

export  function loginUser(req,res){

        const email=req.body.email;
        const password=req.body.password;

        User.findOne({
            email:email
        }).then((user)=>{
            if(user==null){
                res.status(402).json({
                    message:"Inavalid email"
                })
            }else{
                const isPassswordCorrect=bcrypt.compareSync(password,user.password)
                if(isPassswordCorrect){
                    res.json({
                        mesasge:"Login successful"
                    })
                }else{
                    res.status(403).json({
                        message:"Invalid password"
                    })
                }
            }
        })

    }

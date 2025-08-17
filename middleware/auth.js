import jwt  from "jsonwebtoken"
export default function verifyJwt(req, res, next)  {
    const header = req.header("Authorization"); // ✅ fixed space issue

    if(header !=null){
        const token=header.replace("Bearer ","")
        console.log(token);
        jwt.verify(token,"rondom456",(err,decoded)=>{
            console.log(decoded);
            if(decoded !=null){
                req.user=decoded;
            }
        })
    }
    //console.log(header); // should log the token from Postman

    next();
}
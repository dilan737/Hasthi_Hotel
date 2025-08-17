import Product from "../models/product.js";

export async function createProduct(req,res){
    if(req.user==null){
        res.status(403).json({
            message:"You need to login First"
        })
        return;
    }
    if(req.user.role !="admin"){
        res.status(403).json({
            message:"You are not allowed to create product"
        })
        return;
    }
    const product=new Product(req.body);
    try{
        await product.save()

    }catch(err){
        res.status(500).json({
            message:"Product not Saved"
        })
    }
    
}
export function getProduct(req,res){
    Product.find().then(
        (products)=>{
            res.json(products);
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message:"Product not Found"
            })
        }
    )

}
export function DeleteProduct(req,res){
    if(req.user==null){
        res.status(403).json({
            message:"You need to login First"
        })
        return;
    }
    if(req.user.role !="admin"){
        res.status(403).json({
            message:"You are not allowed to delete product"
        })
        return;
    }
    Product.findOneAndDelete({
        productId:req.params.productId

    }).then(
        ()=>{
            res.json({
                message:"Product deleted successfully"
            })
        }
    )


}
export function UpdateProduct(req,res){
    if(req.user==null){
        res.status(403).json({
            message:"You need to login First"
        })
        return;
    }
    if(req.user.role !="admin"){
        res.status(403).json({
            message:"You are not allowed to update product"
        })
        return;
    }
    Product.findOneAndUpdate({
        productId:req.params.productId
    },req.body).then(
        ()=>{
            res.json({
                message:"Product updated successfully"
        
    })
}
    ).catch(
        ()=>{
            res.json({
                message:"Product not Updated"
            })
        }
        
    )
}

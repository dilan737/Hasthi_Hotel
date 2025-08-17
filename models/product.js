import mongoose from "mongoose";

const productSchema=new mongoose.Schema({

    productId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    altNames:{
        type:[String],
        default:[]
    },
    price:{
        type:Number,
        required:true
    },
    labeledPrice:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:[String],
        required:true,
        default:["https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fproduct&psig=AOvVaw3Vc79VSWZerWkmi2KnlJ7D&ust=1755277954905000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOi-4J3mio8DFQAAAAAdAAAAABAE"]
    },
    stock:{
        type:Number,
        required:true

    },

})
const Product=mongoose.model("Product",productSchema);
export default Product;
import Item from "../models/item.js";

export function getAllitem(req,res){

    Item.find().then(
        (items)=>{
            res.json(items)
        }
    ).catch(
        ()=>{
            message:"Error"
        }
    )

}
export function saveItem(req,res){
    const item=new Item(req.body)

    item.save().then(
        ()=>{
            res.json({
                message:"Item Saved"
            })
        }
    ).catch(
        ()=>{
            res.jsson({
                message :"Error occured"
            })
        }
    )

    }

export function getGoodItems(req,Sres){
        res,json({
            message:"Good Items"
        })
    }
    export function searchItems(req,res){
        
        const iteamName=req.params.name;

        Item.find(
            {
                name:iteamName
            }
        ).then(
            (items)=>{
                res.json(items)
            }
        ).catch(
            ()=>{
                message:"Error"
            }
        )


    }

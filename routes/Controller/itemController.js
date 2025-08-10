import Item from "../../models/item.js";

export function getAllitem(req,res){

    Item.find().then(
        (items)=>{
            res.jon(items)
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

import Order from "../models/order.js";

export async function createOrder(req, res) {
    if (!req.user==null) {
        return res.status(401).json({
             message: "Unauthorized" 
             //sample
            });
            return;
    }

    const body = req.body;
    const orderData = {
        orderId: "",
        email: req.user.email,
        name: body.name,
        address: body.address,
        phoneNumber: body.phoneNumber,
        billItems: [], // optional from request
        total:  0
    };

    Order.find().sort({ date: -1 }).limit(1)
        .then((lastBills) => {
            if (lastBills.length === 0) {
                orderData.orderId = "ORD-0001";
            } else {
                const lastBill = lastBills[0];
                const lastOrderId = lastBill.orderId || "ORD-0000";
                const lastOrderNumber = lastOrderId.replace("ORD", "");
                const lastOrderNumberInt = parseInt(lastOrderNumber) || 0;
                const newOrderNumber = lastOrderNumberInt + 1;
                const newOrderNumberString = String(newOrderNumber).padStart(4, "0");
                orderData.orderId = "ORD-" + newOrderNumberString;
            }
            for(let i=0;i<body.billItems.length;i++){

                const billItems=body.billItems[i];
                //check if product exists

            }

            const order = new Order(orderData);
            return order.save();
        })
        .then((savedOrder) => {
            res.status(201).json({
                message: "Order created successfully",
                //order: savedOrder
            });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: "Failed to create order", error: error.message });
        });
}

export function Getorders(req,res){

    if(req.user==null){
        res.status(401).json({
            message:"Unauthorized"
        })
        return;
    }
    if(req.user.role =="admin"){

        Order.find().then(
            (orders)=>{
                res.status(200).json(orders);
            }
        ).catch(
            (error)=>{
                res.status(500).json({
                    message:"Order Not Found"
                    
                })
            }
        )
    }else{

        Order.find({
            email:req.user.email        
        }).then(
            (orders)=>{
                res.json(orders);
            }
        ).catch(
            (error)=>{
                res.status(500).json({
                    message:"Order Not Found",
                    
                })
            }
        )

    }
}
   

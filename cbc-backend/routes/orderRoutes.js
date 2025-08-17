import express from "express";
import { createOrder, Getorders} from "../controllers/orderController.js";

const orderrouter = express.Router();

orderrouter.post("/",createOrder)
orderrouter.get("/",Getorders)

export default orderrouter;
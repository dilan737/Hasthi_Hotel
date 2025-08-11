import expresss from "express"
import { getAllitem, getGoodItems, saveItem, searchItems } from "../controllers/itemController.js";
import { good } from "../controllers/studentController.js";


const iteamRouter=expresss.Router();

iteamRouter.get("/",getAllitem)

iteamRouter.post("/",saveItem)
iteamRouter.get("/good",getGoodItems)
iteamRouter.get("/:name",searchItems)

export default iteamRouter;
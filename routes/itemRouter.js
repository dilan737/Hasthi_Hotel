import expresss from "express"
import { getAllStudents } from "./controllers/studentController.js";
import { getAllitem, saveItem } from "./controllers/itemController.js";

const iteamRouter=expresss.Router();

iteamRouter.get("/",getAllitem)
iteamRouter.post("/",saveItem)

export default iteamRouter;
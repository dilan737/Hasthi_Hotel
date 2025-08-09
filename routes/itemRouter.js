import expresss from "express"
import { getAllStudents } from "./controllers/studentController";
import { getAllitem, saveItem } from "./controllers/itemController";

const iteamRouter=expresss.Router();

iteamRouter.get("/",getAllitem)
iteamRouter.post("/",saveItem)

export default iteamRouter;
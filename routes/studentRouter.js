import express from 'express';
import { getAllStudents, saveStudent, updateStudent, deleteStudent } from './controllers/studentController.js';

const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.post("/", saveStudent);
studentRouter.put("/", updateStudent);
studentRouter.delete("/", deleteStudent);

export default studentRouter;

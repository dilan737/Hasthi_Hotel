import Student from "../../models/Student.js"

export function getAllStudents(req,res){

    Student.find().then(
        (students)=>{
            res.json(students)

        }
    ).catch(
        ()=>{
            res.json({
                message:"Error"
            })
        }
    )
    
}
    


export function saveStudent(req,res){
  const student =new Student(req.body)
   student.save().then(
        ()=>{
            res.json({
                message:"Student Saved"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message:"Error"
            })
        }
    )
}
export function updateStudent(req,res){
    res.json({
        message:"Student Updated"
    })
}
export function deleteStudent(req,res){
    res.json({
        message:"Student deleted"
    })
}


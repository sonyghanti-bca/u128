//lab7 Develop ExpressJs app to Restful API on student records
const express=require("express")
const app=express()
app.use(express.json())
let students=[
    {id:1,name:'Anand',course:'BCA'},
    {id:1,name:'Kiran',course:'BBA'}
]
app.get("/students",(req,resp)=>{
    resp.json(students)
})
app.get("/students/:id",(req,resp)=>{
    let sid=req.params.id
    const s=students.find((s)=>{return s.id==sid})
    if(s){
        resp.json(s)
    }else{
        resp.status(404).json({"message":"student record not found"})
    }
})
app.post("/students",(req,resp)=>{
    let id=req.body.id
    let name=req.body.name
    let course=req.body.course
    let s={id:id,name:name,course:course}
    students.push(s)
    resp.status(201).json({"message":"new student created","student":s})
})
app.put("/students/:id",(req,resp)=>{
    let sid=req.params.id
    let index=students.findIndex((s)=>s.id==sid)
    if(index!=-1){
        let name=req.body.name
    let course=req.body.course
    let s={id:sid,name:name,course:course}
    students[index]=s
    resp.json({"message":"students record updated","students":s})
    }else{
        resp.status(404).json({"message":"students record not found"})
    }
}) 
app.delete("/students/:id",(req,resp)=>{
    let sid=req.params.id
    let s=students.find((s)=>{return s. id==sid})
    if(s){
        students=students.filter((s)=>{return s.id!=sid})
    resp.status(204).json({"message":"students record deleted"}) 
   }else{
    resp.status(404).json({"message":"student record not found"})
   }
})
app.listen(3000,()=>{console.log("Server Started")})
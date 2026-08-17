const express=require("express")
const app=express()
app.use(express.json())
let employee=[
    {empid:101,name:"Raju",salary:25000},
    {empid:102,name:"Rani",salary:35000}
]
app.get("/emp",(req,resp)=>{
    resp.json(employee)

})
app.get("/emp/:id",(req,resp)=>{
    let empid=req.params.empid
    const e=employee.find((e)=>{return e.empid==empid})
    if(e){
        resp.json(e)
    }
    else{
        resp.status(404).json({"message":"employee record not found"})
    }
})
app.post("/emp",(req,resp)=>{
    let empid=req.body.empid          
    let name=req.body.name
    let salary=req.body.salary
    let e={empid:empid,name:name,salary:salary}
    employee.push(e)
    resp.status(201).json({"message":"new employee record has been created","employee":e})
})
app.put("/emp/:empid",(req,resp)=>{
    let empid=req.params.empid
    let index=employee.findIndex((e)=>{return e.empid==empid})
    if(index!==-1){
        let name=req.body.name
        let salary=req.body.salary
        let e={empid:empid,name:name,salary:salary}
        employee[index]=e
        resp.json({"message":"employee record has been updated","employee":e})
    }
    else{
        resp.status(404).json({"message":"employee record not found"})
    }
})
app.delete("/emp/:empid",(req,resp)=>{
    let empid=req.params.empid
    let e=employee.find((e)=>{return e.empid==empid})
    if(e){
        employee=employee.filter((e)=>{return e.empid!=empid})
        resp.json({"message":"employee record has been deleted","employee":e})
    }
    else{
        resp.status(404).json({"message":"employee record not found"})
    }
})
app.listen(3000,()=>{
    console.log("server started")
})
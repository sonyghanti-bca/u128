//Express
const express=require ("express")
const app=express()
const path=require("path")
app.use(express.urlencoded({extended:false}))
app.get("/dept",(req,resp)=>{
    resp.sendFile(path.join(__dirname,'','dept.html'))
})

app.post("/dept",(req,resp)=>{
    console.log("Department information")
    console.log(req.body)
    resp.send("<h1>New Department information has been created</h1>")
})
app.listen(3000,()=>{console.log("Server started")})
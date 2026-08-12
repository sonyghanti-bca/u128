const http=require("http");
const fs=require("fs");
const server=http.createServer((req,resp)=>{
  if(req.method=="GET" && req.url=="/"){
    fs.readFile("index.html",(error,data)=>{
      resp.writeHead(200,{"content-type":"text/html"})
      resp.end(data)
    })
  }
   else if(req.method=="GET" && req.url=="/about"){
    fs.readFile("about.html",(error,data)=>{
      resp.writeHead(200,{"content-type":"text/html"})
      resp.end(data)
    })
  }
  else if(req.method=="GET" && req.url=="/courses"){
    fs.readFile("courses.html",(error,data)=>{
      resp.writeHead(200,{"content-type":"text/html"})
      resp.end(data)
    })
  }
  else if(req.method=="GET" && req.url=="/contact"){
    fs.readFile("contact.html",(error,data)=>{
      resp.writeHead(200,{"content-type":"text/html"})
      resp.end(data)
    })
  }
  else if(req.method=="POST"){
    let body=``
    req.on("data",(chunk)=>{
        body=body+chunk
    })  
    req.on("end",()=>{
        let data=new URLSearchParams(body)
        console.log(`Rollno=${data.get("rno")}`)
        console.log(`Name=${data.get("name")}`)
        resp.writeHead(200,{"content-type":"text/html"})
        resp.write(`<h1>Your Information Received</h1>`)
        resp.end()
    })
}
  else {
    resp.writeHead(404,{"content-type":"text/html"})
    resp.end(`<h1>404 page not found</h1>`)
  }
})
server.listen(3000,()=>{console.log("server started")
    })
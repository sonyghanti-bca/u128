/*Write a NodeJs program to demonstrate http get and post request of student data*/
//Step:1 import the http module
const http=require("http")
//step:2 create server using createServer() function of http module
const server=http.createServer((req,resp)=>{
//Step:4 check the request method is get
if(req.method=="GET"){
//Step:5 write the response header
resp.writeHead(200,{"content-type":"text/html"})
//Step:6 generate blank html form using write() function
resp.write(`<form method="post">`)
resp.write(`Rollno<input type="text" name="rno"/><br>`)
resp.write(`Name<input type="text" name="name"/><br>`)
resp.write(`<button type="submit">Submit</button>`)
resp.write(`</form>`)  
//step:7 end the response
resp.end()
}
//Step:8 check for the post request
if(req.method=="POST"){
    let body=``;
 //Step:9 receive the data from post request in chunks for data event
 req.on("data",(chunk)=>{
    body=body+chunk
 })   
 //Step:10 once data has been completely recieved end event urlsearchparams
 req.on("end",()=>{
    let data=new URLSearchParams(body)
    console.log(`rollno=${data.get("rno")}`)
    console.log(`name=${data.get("name")}`)
 //Step:11 write the response header
    resp.writeHead(200,{"content-type":"text/html"})
//Step:12 diplay confirmation message to client
   resp.write(`<h1>your information received<h1>`) 
//Step:13 end the response
resp.end()
 })
}
})
//Step:3 Listen client request on port number 30000 using listen() function
server.listen(3000,()=>{console.log("server started")})
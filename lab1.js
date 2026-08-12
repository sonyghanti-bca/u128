//step1 import http module
const http=require("http")
//step2 create server using CreateServer() function of http module
const server=http.createServer((req,resp)=>{
//step4 write the response header using writeHead()function
resp.writeHead(200,{"content-type":"text/html"})
//step5 display college information using html and writ() function
resp.write(`<h1>BLDEA commerce BHS Arts & TGP College,jamkhandi </h1>`)
resp.write(`<h2>started year,1963 </h2>`)
resp.write(`<h3> located in Jamkhandi </h3>`)
resp.end()
});
//step3 listen the server forn incoming request on
server.listen(3000,()=>{console.log("server started")})
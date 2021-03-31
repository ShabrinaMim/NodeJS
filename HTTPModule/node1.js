let http = require("http");
const { hostname } = require("os");
let portNumber = 4444;
let myServer = http.createServer(function(request, response){

    if(request.url == "/")
    {
        response.writeHead(200,{"Content-Type":"text/html"});//head part of response
        response.write("<h1>Home Page</h1>");//body part of response
        response.end();
    }
    else if(request.url == "/about")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>About Page</h1>");
        response.end();
    }
    else if(request.url == "/contacts")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>Contact Page</h1>");
        response.end();
    }
});

myServer.listen(portNumber,hostname,()=>{
    console.log("Server is running");
});
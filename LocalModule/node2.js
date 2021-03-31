const mainFunction1 = () =>{
    return "sdsfdgfh";
}

const mainFunction2 = () => {
    return "vbn ";
}
const var1 = 1213;

const var2 = 234;

exports.function1 = mainFunction1;
exports.function2 = mainFunction2;


const http = require("http");
const { hostname } = require("os");
const portNumber = 4444;
const myServer = http.createServer((request,response)=>{

    if(request.url == "/")
    {
        response.writeHead(200,{"Content - Type":"text/html"});
        response.write("<h1>Home Page</h1>");
        response.end();
    }
    else if(request.url == "/about")
    {
        response.writeHead(200,{"Content - Type":"text/html"});
        response.write("<h1>About Page</h1>");
        response.end();
    }
    else if(request.url == "/contacts")
    {
        response.writeHead(200,{"Content - Type":"text/html"});
        response.write("<h1>Contact Page</h1>");
        response.end();
    }
});

myServer.listen(portNumber,hostname,()=>{
    console.log("Server is running");
});
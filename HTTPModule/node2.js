const http = require("http");
const fs = require("fs");

let myServer = http.createServer(function(request, response) {
    if(request.url == "/"){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("Home page");
        response.end();
    }
    if(request.url == "/api"){
        fs.readFile("APIdata.json","utf-8", function(errorvar, apidata) {
            
            let normalobject = JSON.parse(apidata);
            console.log(normalobject);
            response.write(normalobject[0].name);
            response.end();
        });
    } 
});

myServer.listen(3000,"localhost", function() {
    console.log("server running");
})

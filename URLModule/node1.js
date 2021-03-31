let url = require("url");
let http = require("http");

let portNumber = 4444;
let myServer = http.createServer(function(request, response){

    let myurl = "https://www.bd-pratidin.com/";
    let myurlobject = url.parse(myurl, true);

    let hostName = myurlobject.host;
    let pathName = myurlobject.pathname;
    let queryName = myurlobject.search;

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(hostName + "  " + pathName + "  " + queryName);
    response.end();  
});

myServer.listen(4445);
console.log("Server running");
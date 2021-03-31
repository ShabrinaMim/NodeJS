let path = require("path");
let express = require("express");
let app = express();

console.log(__dirname);
//app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static("D:\Users\ACS\NodeJS\ExpressJS\public"));
app.get("/nine", function(req, res) {
    res.send("built in middleware");
})

app.listen(6078);
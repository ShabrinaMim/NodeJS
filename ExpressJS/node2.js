// working with multipart form data using multer

let express = require("express");
var multer = require("multer");

var multer = multer();
let app = express();

app.use(multer.array());
app.use(express.static("public"));

app.post("/seven", function(req, res) {
    let jsondata = req.body;
    res.send(JSON.stringify(jsondata));
    res.send("hhhhh");
})


app.listen(4000, function() {
    console.log("Server running");
})
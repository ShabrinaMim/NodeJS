const express = require("express");
const bodyParser = require("body-parser");
const { json } = require("express");
let app = express();
app.use(bodyParser.json());
const port = 3000;


//res.send(" ") --> response body
app.get('/', function(req, res){
 // res.send('Home Page!');                           //simple string response
  //res.send("<h1>home page</h1>");                   //html response
  res.send({ user: 'tobi',
             prof:"SE" }) ;                       //json response
  //res.send('Home Page!');
             
});

//set response status using res.status() method
app.get('/one', function(req, res){
    res.send('About Page!');
    res.status(201).end();
});

//respons download method using res.download() method
app.post('/two', function(req, res){
    res.send('Contact Page!');
    res.download("./upload/abc.jpg");
});

//response redirect method using res.redirect() method
app.put('/three', function (req, res) {
    res.send('Got a PUT request at /user');
    res.redirect("http://localhost//3000/append");
});

//set field:value in response header using res.append() method
app.get("/four", function(request, response) {
  res.send("new page");
  res.append("name","mim");
  res.append("prof","SE");
  res.status(201).end();
});

//set cookies as name:value in response using res.cookie() method
app.post("/five", function(req, res) {
  res.send("new page");
  res.cookie("name","mim");
  res.cookie("prof","SE");
});

//working with json body with post method 
app.post("/six", function(req, res) {
  let jsondata = req.body;
  let name = json.name;             //json.["name"];
  let prof = json.prof;             //json["prof"];
  res.send(name + " " + prof);
})
app.listen(port, function(){
  console.log("Example app listening at http://localhost:{port}");
});
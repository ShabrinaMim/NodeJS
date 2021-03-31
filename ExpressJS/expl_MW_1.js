let express = require("express");
let app = express();

const middleware1 = function(req, res, next) {
    console.log("bbbbbbbb");
    next();
};
app.use(middleware1);
app.get("/eight", function(req, res) {
    res.send("Middleware");
});

app.listen(3000);
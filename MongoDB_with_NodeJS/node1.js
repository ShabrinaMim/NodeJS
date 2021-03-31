let mongoclient = require("mongodb").MongoClient;

let myurl = "mongodb+srv://mim:007Shabrina007@mycluster.tb0r9.mongodb.net?retryWrites=true&w=majority";

let myconfig = {useUnifiedTopology: true};
mongoclient.connect(myurl, myconfig, function(errorVariable, myMongoClient){


   if(errorVariable){
       console.log("Connection fail");
   }else{
       console.log("Connection success");
       insertData(myMongoClient);
       //deleteData(myMongoClient);
   }
});

function insertData(myMongoClient) {
    let mydatabase = myMongoClient.db("Company");
    let mycollection = mydatabase.collection("Employee");

    let data = {name:"mim", age:23, post:"S.E"};
    mycollection.insertOne(data, function(errorVariable) {
        if(errorVariable){
            console.log("Insertion fail");
        }else{
            console.log("Insertion success");
        }
    });
}

function deleteData(myMongoClient) {
    let mydatabase = myMongoClient.db("Company");
    let mycollection = mydatabase.collection("Employee");

    let data = {name:"mim"};
    mycollection.deleteOne(data, function(errorVariable) {
        if(errorVariable){
            console.log("Deletion fail");
        }else{
            console.log("Deletion success");
        }
    });
}
     

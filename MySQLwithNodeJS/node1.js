const mySQL = require("mysql");

const databaseConnectionConfiguration = {host:"localhost",user:"root",password:"",database:"SchoolDatabase"};

const connection = mySQL.createConnection(databaseConnectionConfiguration);

connection.connect(function(anyError){
    if(anyError){
        console.log("Connection Failed");
    }
    else{
        insertData(connection);
        console.log("Connection Successful");
    }
});
function insertData(connection) {
    const sqlQuery = "INSERT INTO `teachers`(`ID`, `Name`) VALUES ('1','sdfg')";
    connection.query(sqlQuery,function(anyError) {
        if(anyError){
            console.log("Insertion Command Failed");
        }
        else{
            console.log("Insertion Command Successful");
        }
    });
} 
// Create MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 1021,
    user: "root",
    password: "",
    database: "burgers_db"
});

// Make the connection
connection.connection(function(err){
    if (err){
        console.log("error onnection " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Export connection to ORM

module.exports = connection;
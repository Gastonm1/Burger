// Create MySQL connection
var mysql = require("mysql");
var fs= require("fs");

var secret = fs.readFile("Pass.txt","utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  data;
});

var connection = mysql.createConnection({
  host: "localhost",
  port: 1021,
  user: "root",
  password: secret,
  database: "burgers_db"
});

// Make the connection
connection.connect(function(err) {
  if (err) {
    console.log("error connection " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


//Export connection to ORM

module.exports = connection;

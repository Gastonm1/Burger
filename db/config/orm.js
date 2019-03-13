// Import MySQL connection from connection.js
var connection = require ("../config/connection");
//-------------------------------------------------------------------

// Create the methods that will execute the MySQL commands needed to retrieve and store data into database.

var orm = {
    selectAll : function() {
        return connection.query("SELECT * FROM burgers", function (err,res){
            if (err) throw err;
            console.log("This is All of the burgers")
            console.log(res);
        })
    }
}

module.exports = orm;
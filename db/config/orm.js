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
    },


//---------------------------------------------------------------------------------------------------------
// ASK TA how to properly test.... I feel like these are very close but will receive error codes... 
//---------------------------------------------------------------------------------------------------------
    // insertOne : function (burger_name, devoured){
    //     var queryString = "INSERT INTO burgers";
    //     console.log("This is adding new burgers to DB")
    //     return connection.query(querystring, [burger_name,devoured], function(err,res) {
    //         if (err) throw err;
    //         // insertOne(res);
    //         console.log(insertOne(res))
    //     }
    // )},

    // updateOne : function() {
    //     var queryString = "UPDATE burgers SET ?? WHERE ?? = ?";
    //     console.log("This is updating a existing burger from DB");
    //     return connection.query(queryString, [burger_name, burgers], function (err, res){
    //         if (err) throw err;
    //         updateOne (res);
    //     })
    // }
}

module.exports = orm;
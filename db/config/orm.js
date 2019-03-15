// Import MySQL connection from connection.js
var connection = require ("../config/connection");
//-------------------------------------------------------------------

// In order to write the query we need, we have to obtain the value for 3 question marks.

function printQuestionMarks(num) { //<--- num needs to be cb
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax

function objToSQL(ob){
    var arr = [];

    //loop through the keys and push the key/value as a string into empty array.

    for (var key in ob) {
        var value = ob[key]; //<-- Ask tutor or TA what this is doing exactly
        // check to skip any hidden properties
        if(Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexof(" ") >= 0) {
                value = "'" + value + "'";
            }

            //e.g. { name : 'Lana Del Grey'} => ["name="'Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// Create the methods that will execute the MySQL commands needed to retrieve and store data into database.

var orm = {
    selectAll : function(tableInput, cb) {
        var queryString = "select * from " + tableInput + ";";
        connection.query(queryString, function (err,res){
            if (err) {
                throw err;
            }
            cb(res);
        })
    },

    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO" + table;

        queryString += "(";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
    }


// ---------------------------------------------------------------------------------------------------------
// ASK TA how to properly test.... I feel like these are very close but I will receive errors 
// ---------------------------------------------------------------------------------------------------------
    insertOne : function (burger_name, devoured){
        var queryString = "INSERT INTO burgers (burger_name) Values = ? ";
        console.log("This is adding new burgers to DB")
        return connection.query(querystring, [burger_name, devoured], function(err,res) {
            if (err) throw err;
            // insertOne(res);
            console.log(insertOne(res))
        }
    )},

    updateOne : function() {
        var queryString = "UPDATE burgers SET burger_name = ? WHERE id = ?";
        console.log("This is updating a existing burger in DB");
        return connection.query(queryString, [burger_name, i++], function (err, res){
            if (err) throw err;
            updateOne (res);
        })
    }
}

module.exports = orm;
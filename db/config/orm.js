// Import MySQL connection from connection.js
var connection = require("../config/connection");
//-------------------------------------------------------------------

function printQuestionMarks(num) {
  //<--- num needs to be cb
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Function to convert object key/value pairs to SQL syntax

function objToSQL(ob) {
  var arr = [];

  //loop through the keys and push the key/value as a string into empty array.

  for (var key in ob) {
    var value = ob[key]; //<-- Ask tutor or TA what this is doing exactly
    // check to skip any hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexof(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// Create objects for all SQL query functions.

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "select * from " + tableInput + ";";
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO" + table;

    queryString += "(";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, res) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;

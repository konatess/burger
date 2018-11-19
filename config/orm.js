// DEPENDENCIES
var connection = require("./connection");

// declare orm
var orm = {
    // read all
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
    // create one
    insertOne: function(tableInput, col1, valOfCol, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, col1, valOfCol], function(err, result) {
          if (err) throw err;
          cb(result);
        });
    },
    // update one
    updateOne: function(tableInput, colToChange, newVal, searchCol, searchVal, cb) {
        // takes table name, name of column to change, new value, name of column to search and search value
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToChange, newVal, searchCol, searchVal], function(err, result) {
          if (err) throw err;
          cb(result)
        });
    }
};

// MODULE EXPORT
module.exports = orm;
// DEPENDENCIES
var connection = require("./connection");

// declare orm
var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
    insertOne: function(tableInput, col1, valOfCol) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, col1, valOfCol], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
    updateOne: function(tableInput, colToChange, newVal, searchVal) {
        var queryString = "UPDATE ?? SET (??) WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToChange, newVal, searchVal], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    }
};

// MODULE EXPORT
module.exports = orm;
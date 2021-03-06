// DEPENDENCIES
var mysql = require("mysql");

// declare variable
var connection; 

// allow for Heroku database connection
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });
};

connection.connect();
// MODULE EXPORT
module.exports = connection;

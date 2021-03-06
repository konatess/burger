// DEPENDENCIES
var orm = require("../config/orm");

// VARIABLES
var table = "burgers";
var nameCol = "burger_name";
var devoCol = "devoured";

// make orm methods into burger specific methods
var burgerDo = {
    // search and return all burgers
    all: function(cb) {
        orm.selectAll(table, function(res) {
            cb(res);
        })
    },
    // make new burger
    making: function(newName, cb) {
        orm.insertOne(table, nameCol, newName, function(res) {
            cb(res);
        })
    },
    // update a burger
    eating: function(id, cb) {
        orm.updateOne(table, devoCol, true, "id", id, function(res) {
            cb(res);
        })
    }
}

// MODULE EXPORT
module.exports = burgerDo;
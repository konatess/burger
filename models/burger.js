// DEPENDENCIES
var orm = require("../config/orm");

// VARIABLES
var table = "burgers";
var nameCol = "burger_name";
var devoCol = "devoured";

// make orm methods into burger specific methods
var burgerDo = {
    eaten: function() {
        orm.selectAll(table, devoCol, true)
    },
    uneaten: function() {
        orm.selectAll(table, devoCol, false)
    },
    making: function(newName) {
        orm.insertOne(table, nameCol, newName)
    },
    eating: function() {
        orm.updateOne(table, devoCol, true)
    }
}

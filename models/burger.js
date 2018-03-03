var orm = require("../config/orm.js");


var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(results){
            cb(results);
        });
    },
    create: function(burger_name, devoured, cb){
        orm.insertOne("burgers", burger_name, devoured, function(results){
            cb(results);
        });
    },
    update: function(devoured, cb){
        console.log("update data: " + devoured.devoured + devoured.id);
        orm.updateOne("burgers", devoured.devoured, devoured.id, function(results){
            cb(results);
        });
    }
}

module.exports = burger;
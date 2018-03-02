var orm = require("../config/orm.js");


var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(results){
            cb(results);
        });
    },
    one: function(id, cb){
        orm.insertOne("burgers", burger_name, devoured, id, function(results){
            cb(results);
        });
    },
    update: function(devoured, id, cb){
        orm.updateOne("burgers", devoured, id, function(results){
            cb(results);
        });
    }
}

module.exports = burger;
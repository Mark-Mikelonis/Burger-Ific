var orm = require("../config/orm.js");


var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(results){
            cb(results);
        });
    },
    create: function(burger, cb){
        console.log("burger: " + burger.burger_name  +" " +burger.devoured);
        orm.insertOne("burgers", burger.burger_name, 0, function(results){
            cb(results);
        });
    },
    update: function(burger, cb){
       
        orm.updateOne("burgers", burger.devoured, burger.id, function(results){
            cb(results);
        });
    }
}

module.exports = burger;
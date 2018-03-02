var connection = require("./connection.js");



var orm = {
    selectAll: function(tableName, cb){
        var query = "SELECT * FROM ??";
        connection.query(query, [tableName], function(err, result){
           console.log(result);
           cb(result);
        });
    },
    insertOne: function(tableName, burger_name, devoured, cb){
        var query = "INSERT INTO ?? ('burger_name', 'devoured')  VALUES (?,?) ";
        connection.query(query, [tableName, burger_name, devoured], function(err, result){
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(tableName,id, devoured, cb){
        var query = "UPDATE ?? SET devoured = ? WHERE id= ?";
        connection.query(query, [tableName,devoured,id], function(err,result){
            console.log(result);
            cb(result);
        });
    }
}

module.exports = orm;
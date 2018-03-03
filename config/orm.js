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
    updateOne: function(tableName, devoured, id, cb){
        console.log("update one data: " + tableName + devoured + id);
        var query = "UPDATE ?? SET devoured = ? WHERE id= ?";
        connection.query(query, [tableName,devoured,id], function(err,result){
            console.log(result);
            cb(result);
        });
    }
}

module.exports = orm;
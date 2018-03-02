var connection = require("./connection.js");



var orm = {
    selectAll: function(tableName){
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, result){
           console.log(result);
        });
    },
    insertOne: function(tableName, burger_name, devoured ){
        var query = "INSERT INTO ?? ('burger_name', 'devoured')  VALUES (?,?) ";
        connection.query(query, [tableName, burger_name, devoured], function(err, result){
            console.log(result);
        });
    },
    updateOne: function(tableName,id, devoured){
        var query = "UPDATE ?? SET devoured = ? WHERE id= ?";
        connection.query(query, [tableName,devoured,id], function(err,result){
            console.log(result);
        });
    }
}

module.exports = orm;
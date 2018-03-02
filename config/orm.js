var connection = require("./connection.js");



var orm = {
    selectAll: function(tableName){
        var query = "SELECT * FROM ??";
        connection.query(query, [table], function(err, result){
           console.log(result);
        });
    },
    selectOne: function(tableName,id){
        var query = "SELECT * FROM ?? WHERE id = ?";
        connection.query(query, [tableName, id], function(err, result){
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
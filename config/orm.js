var connection = require("./connection.js");



var orm = {
    selectAll: function(tableName, cb){
        var query = "SELECT * FROM ??";
        connection.query(query, [tableName], function(err, result){
           console.log(result);
           cb(result);
        });
    },
    insertOne: function(tableName, burger, devoured, cb){
        console.log("insertOne burger: " + burger + " " + devoured);
        var query = "INSERT INTO ?? (burger_name, devoured)  VALUES (?,?) ";
        connection.query(query, [tableName, burger, 0], function(err, result){
            if (err) throw err;
            console.log("insertOne result: " + result);
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
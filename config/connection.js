var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"rUWKttvA#VIuowOTbqbOUp*H8vEYRwp9I",
    database:"burgers_db"
});

connection.connect(function(err){
    if(err){
        console.error("connection error: " + err.stack);
        return;
    }
});

module.exports = connection;
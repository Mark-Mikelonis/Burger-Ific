var mysql = require("mysql");
var connection = mysql.createConnection({
    port: 3000,
    host: "localhost",
    user: "root",
    password:"rUWKttvA#VIuowOTbqbOUp*H8vEYRwp9I",
    database:"burgers_db"
});

connection.commect(function(err){
    if(err){
        console.error("connection error: " + err.stack);
        return;
    }
});

module.exports = connection;
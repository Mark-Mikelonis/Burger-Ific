var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([
        "name", "devoured"
    ],[
        req.body.burger, req.body.id
    ], function(result){
        res.json({id: result.id});
    
    });
});

router.put("/api/burgers/:id", function(req, res){
    var id = req.params.id;
    var devoured = req.params.devoured;

    burger.update({
        devoured: devoured}, id, function(data){
            if (data.changedRows === 0){
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

module.exports = router;
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log("hbsObject: " + hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body.burger_name);//.name, req.body.devoured);
    
    burger.create({
        burger_name: req.body.burger_name, 
        devoured: req.body.devoured
    }, function(data){
        console.log("in create: "+ data);
        // res.json({id: result.id});
    
    });
});

router.put("/api/burgers/:id", function(req, res){
    var id = req.params.id;
    console.log("button id: " + id);
    var devoured = true;

    burger.update({
        devoured: devoured, id: id}, function(data){
            if (data.changedRows === 0){
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

module.exports = router;
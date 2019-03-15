var express = require ('express');

var router = express.Router();

// Import the model (burger.js) to use its database functions
var burgers = require ("../models/burger");

router.get("/", function(req, res) {
    burgers.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(res){
        res.json({id: res.insertID});
    });
});
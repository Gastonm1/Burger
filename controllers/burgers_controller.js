var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions
var burgers = require("../models/burger");

router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("YOOOOOOOO")
  console.log(req.body.name)
  burgers.insertOne(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    function() {
      res.json({ id: res.insertId });
    }
  );
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(res) {
      if (res.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;

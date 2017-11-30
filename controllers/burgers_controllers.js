const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers/create", function(req, res) {
	burger.create([
		"burger_name", "devoured"
		], [
		req.body.burger_name, req.body.devoured
		], function(result) {
			res.json({ id: result.insertId });
		});
});

router.put("/api/burgers/update:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function(result) {
		res.redirect("/");
	});
});

module.exports = router;
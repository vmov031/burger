const connection = require("./connection.js");

var orm = {

	selectAll: function(tableInput, colToSearch, valOfCol) {
		var queryString = "SELECT * FROM ?? WHERE = ?";
		connection.query(queryString, [tableInput, colToSearch, valOfCol], 
			function(err, result) {
				console.log(result);
			});
	},

	insertOne: function(whatToSelect, table, col) {
		var queryString = "INSERT INTO ?"
	}


	updateOne: function()
};

module.exports = orm;
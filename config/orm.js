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
		var queryString = "INSERT INTO ? VALUES ?, ?";
		connection.query(queryString, [whatToSelect],
			function(err, result) {
				console.log(result);
			});
	},


	updateOne: function(whatToSelect, col1, col2) {
		var queryString = "UPDATE";
		connection.query(queryString, [whatToSelect],
			function(err, result) {
				console.log(result);
			});
	}
};

module.exports = orm;
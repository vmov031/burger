const connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];


  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
    
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

var orm = {

	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";" ;
		connection.query(queryString, function(err, result) {
				if (err) {
					throw err;
				}
				cb(result);
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
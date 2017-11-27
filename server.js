const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

const app = express();

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);
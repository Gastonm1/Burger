var express = require("express");
var connection = require("./db/config/connection");

// Make connection
connection.connect(function(err) {
  if (err) {
    console.log("error connection " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

var PORT = process.env.PORT || 1021;

var app = express();

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// Handlebars.registerPartial('myPartial', '{{name}}')
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at http://localhost:" + PORT);
});

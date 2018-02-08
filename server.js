// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./routing/htmlRoutes.js"); 
// might need the one below later
//var apiRoutes = require("./app/routing/apiRoutes.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

htmlRoutes(app, path);

//won't need this til later
//apiRoutes(app, path);


app.use('/public', express.static('/public'));



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
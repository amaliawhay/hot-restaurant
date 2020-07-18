HEAD
//dependencies
var express = require("express");
var path = require("path");
=======
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
d1cea05ea870630d356cdf8b35ec1989a82bb328

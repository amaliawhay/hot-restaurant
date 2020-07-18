var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//--------------------------------------------------------------

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/../html/home.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "/../html/reserve.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "/../html/tables.html"));
});

app.get("/waitlist", function (req, res) {
  res.sendFile(path.join(__dirname, "/../html/waitlist.html"));
});

//--------------------------------------------------------------

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

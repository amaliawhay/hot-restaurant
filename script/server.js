//dependencies
var express = require("express");
var path = require("path");

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

const waitList = [];
const tables = [];
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

app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
  return res.json(waitList);
});

//-------------------------------------------------------------------------------------------------

app.post("/api/clear", function (req, res) {
  var clearTable = req.body;

  console.log(clearTable);

  res.json(clearTable);
});

//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------
//post stuff
app.post("/api/tables", function (req, res) {
  var newTable = req.body;

  console.log(newTable);

  tables.push(newTable);

  res.json(newTable);
});
app.post("/api/waitlist", function (req, res) {
  var newTable = req.body;

  console.log(newTable);

  waitList.push(newTable);

  res.json(newTable);
});

//--------------------------------------------------------------

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

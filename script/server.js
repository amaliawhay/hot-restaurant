//dependencies
var express = require("express");
var path = require("path");

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

const waitList = [];

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
  res.sendFile(path.join(__dirname, "/../html/tables.html"));
});

app.get("/api/clear", function (req, res) {
  res.sendFile(path.join(__dirname, "/../html/tables.html"));
});

app.get("/api/waitlist", function (req, res) {
  res.sendFile(path.join(__dirname, "/../html/waitlist.html"));
});

app.get("/api/tables/:table", function (req, res) {
  var chosen = req.params.table;

  console.log(chosen);

  for (var i = 0; i < table.length; i++) {
    if (chosen === table[i].routeName) {
      return res.json(table[i]);
    }
  }

  return res.json(false);
});

//--------------------------------------------------------------
//post stuff
app.post("/api/tables", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // newTable.name = newTable.routeName.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  waitList.push(newTable);

  res.json(newTable);
});

//--------------------------------------------------------------

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

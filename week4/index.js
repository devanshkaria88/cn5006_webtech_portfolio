var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello, this is my first express application");
});

app.get("/about", function (req, res) {
  res.send("This is a basic express application");
});

app.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params);
});

var fs = require("fs");

app.get("/GetStudents", function (req, res) {
  fs.readFile(__dirname + "/Student.json", "utf8", function (err, data) {
    res.json({ studentdata: JSON.parse(data) });
  });
});

app.get("/GetStudentid/:id", function (req, res) {
  fs.readFile(__dirname + "/Student.json", "utf8", function (err, data) {
    var students = JSON.parse(data);
    var student = students["Student" + req.params.id];
    res.json(student || { status: false });
  });
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/studentinfo", function (req, res) {
  res.sendFile("StudentInfo.html", { root: __dirname });
});

app.post("/submit-data", function (req, res) {
  var name = req.body.firstName + " " + req.body.lastName;
  res.send({ name: name, email: req.body.email });
});

app.listen(8888, function () {
  console.log("Server is running on port 5000");
});

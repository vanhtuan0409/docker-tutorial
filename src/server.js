const express = require("express");
const morgan = require("morgan");
const db = require("./db");

db.init();
const app = express();
app.use(morgan("dev"));

app.get("/", function(req, res) {
  res.send("Hello world!!!");
});

app.get("/list", function(req, res) {
  const conn = db.getConnection();
  conn
    .collection("list")
    .find({})
    .toArray(function(err, result) {
      if (err) {
        res.status(500).json({
          error: err.message
        });
        return;
      }
      res.json(result);
    });
});

app.get("/list/add/:name", function(req, res) {
  const conn = db.getConnection();
  const name = req.params["name"];
  conn.collection("list").insertOne({ name }, function(err, result) {
    if (err) {
      res.status(500).json({
        error: err.message
      });
      return;
    }
    res.json({
      success: true
    });
  });
});

const port = process.env.HTTP_PORT || 8000;
app.listen(port, function() {
  console.log(`Server is running on :${port}`);
});

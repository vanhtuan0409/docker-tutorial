const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.get("/", function(req, res) {
  res.send("Hello world!!!");
});

const port = process.env.HTTP_PORT || 8000;
app.listen(port, function() {
  console.log(`Server is running on :${port}`);
});

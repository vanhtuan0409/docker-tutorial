const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const controller = require("./controller");

db.init();
const app = express();
app.use(morgan("dev"));

app.get("/", controller.index);
app.get("/list", controller.list);
app.get("/list/add/:name", controller.addItem);

const port = process.env.HTTP_PORT || 8000;
app.listen(port, function() {
  console.log(`Server is running on :${port}`);
});

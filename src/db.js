const MongoClient = require("mongodb").MongoClient;

let connection = null;

module.exports = {
  init() {
    const host = process.env.MONGODB_HOST || "localhost";
    const port = process.env.MONGODB_PORT || 27017;
    const database = process.env.MONGODB_DB || "dockertutorial";
    const dns = `mongodb://${host}:${port}/${database}`;
    MongoClient.connect(dns, function(err, db) {
      if (err) {
        console.error("Cannot connect to mongodb");
        return;
      }
      connection = db.db(database);
      console.log("Connected to mongodb");
    });
  },
  getConnection() {
    return connection;
  }
};

const mysql = require("mysql");

// Set up our connection information
const connection = mysql.createConnection({
  port: 3306,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "burgers_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;

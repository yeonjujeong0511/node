const mysql = require("mysql2");

// MySQL 연동
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "Test",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("데이터 베이스 접속");
});

module.exports = connection;

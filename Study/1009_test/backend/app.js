const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  db.query("SELECT * FROM board", (err, row, fill) => {
    if (err) throw err;
    res.send(row);
  });
});

app.listen(PORT, () => {
  console.log(`express 서버 ${PORT} 실행`);
});

module.exports = app;
